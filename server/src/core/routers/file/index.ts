import { db } from "@/core/db";
import * as schema from "@/core/db/schema";
import { authed } from "@/core/rpc";
import { and, eq, isNull } from "drizzle-orm";
import { ResultAsync } from "neverthrow";
import * as z from "zod";
import {
  deleteSecurityFileCookie,
  getFileUrl,
  getSecurityFileCookie,
} from "./helper";

export const confirmFileUpload = authed
  .input(
    z.object({
      id: z.string(),
    })
  )
  .handler(async ({ input, errors, context: { user } }) => {
    const cookieResult = await ResultAsync.fromSafePromise(
      getSecurityFileCookie({ id: input.id })
    );

    if (cookieResult.isErr()) {
      throw errors.BAD_REQUEST();
    }

    const fileResult = await ResultAsync.fromSafePromise(
      db.query.file.findFirst({
        where: and(
          eq(schema.file.id, input.id),
          eq(schema.file.userId, user.id),
          isNull(schema.file.uploadedAt)
        ),
        columns: {
          key: true,
        },
      })
    );

    if (fileResult.isErr()) {
      throw errors.INTERNAL_SERVER_ERROR();
    }

    if (!fileResult.value) {
      throw errors.BAD_REQUEST();
    }

    if (fileResult.value.key !== cookieResult.value) {
      throw errors.BAD_REQUEST();
    }

    /**
     * check if the file exists on the bucket
     * using HEAD request to check if the file exists
     */
    const fileExists = await ResultAsync.fromSafePromise(
      fetch(getFileUrl({ key: fileResult.value.key }), {
        method: "HEAD",
      })
    );

    if (fileExists.isErr()) {
      throw errors.INTERNAL_SERVER_ERROR();
    }

    if (fileExists.value.status !== 200) {
      throw errors.BAD_REQUEST({
        message: "File not found",
      });
    }

    const updateResult = await ResultAsync.fromSafePromise(
      db
        .update(schema.file)
        .set({
          uploadedAt: new Date(),
        })
        .where(eq(schema.file.id, input.id))
    );

    if (updateResult.isErr()) {
      throw errors.INTERNAL_SERVER_ERROR();
    }

    deleteSecurityFileCookie({ id: input.id });
  });
