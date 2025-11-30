import { auth } from "@/core/providers/auth";
import { db } from "@/core/db";
import { os } from "@orpc/server";
import { getContext } from "hono/context-storage";
import * as z from "zod";

const base = os.errors({
  UNAUTHORIZED: {
    message: "You're not authenticated to perform this action",
    status: 401,
    body: z.object({
      requestId: z.string(),
    }),
  },
  BAD_REQUEST: {
    status: 401,
    message: "Something went wrong",
    body: z.object({
      requestId: z.string(),
    }),
  },
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: "Something went wrong",
    body: z.object({
      requestId: z.string(),
    }),
  },
});

const createContextMiddleware = base.middleware(async ({ context, next }) => {
  const requestId = getContext().var.requestId;

  return next({
    context: {
      ...context,
      db,
      requestId,
    },
  });
});

const authMiddleware = base.middleware(async ({ context, next, errors }) => {
  const headers = getContext().req.header();
  console.log("🚀 ~ authMiddleware ~ headers:", headers);

  const authObject = await auth.api.getSession({
    headers: new Headers(headers),
  });

  if (!authObject) {
    throw errors.UNAUTHORIZED();
  }

  return next({
    context: {
      ...context,
      auth,
      user: authObject.user,
      session: authObject.session,
    },
  });
});

export const pub = base.use(createContextMiddleware);
export const authed = base.use(createContextMiddleware).use(authMiddleware);
