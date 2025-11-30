import { db } from "@/core/db";
import * as schema from "@/core/db/schema";
import { auth } from "@/core/providers/auth";
import { env } from "@/env";
import { route, Router, UploadFileError } from "better-upload/server";
import { r2 } from "better-upload/server/helpers";
import { ResultAsync } from "neverthrow";
import { v4 as uuid } from "uuid";
import { setSecurityFileCookie } from "../routers/file/helper";

export const imageTypes = ["image/jpeg", "image/png"];

const storage = r2({
  accountId: env.R2_ACCOUNT_ID,
  accessKeyId: env.R2_ACCESS_KEY,
  secretAccessKey: env.R2_SECRET_KEY,
});

export const fileRouter: Router = {
  client: storage,
  bucketName: env.R2_BUCKET_NAME,
  routes: {
    profilePicture: route({
      maxFileSize: 1024 * 1024 * 10, // 10MB
      signedUrlExpiresIn: 60 * 60 * 5, // 5 minutes
      fileTypes: imageTypes,
      async onBeforeUpload({ req }) {
        const user = await ResultAsync.fromSafePromise(
          auth.api.getSession({
            headers: req.headers,
          })
        );

        if (user.isErr()) {
          throw new UploadFileError("Server Error");
        }

        if (!user.value?.user) {
          throw new UploadFileError("Not logged in");
        }

        const key = `f/${uuid()}`;

        return {
          objectKey: key,
          metadata: {
            userId: user.value.user.id,
            objectKey: key,
          },
        };
      },
      async onAfterSignedUrl({ metadata, file }) {
        const result = await ResultAsync.fromSafePromise(
          db
            .insert(schema.file)
            .values({
              key: file.objectKey,
              userId: metadata.userId,
              type: file.type,
            })
            .returning({
              id: schema.file.id,
            })
        );

        if (result.isErr()) {
          throw new UploadFileError("Server Error");
        }

        await ResultAsync.fromSafePromise(
          setSecurityFileCookie({
            id: result.value[0].id,
            key: metadata.objectKey,
          })
        ).mapErr(() => {
          throw new UploadFileError("Server Error");
        });

        return {
          metadata: {
            key: file.objectKey,
            id: result.value[0].id,
          },
        };
      },
    }),
  },
};
