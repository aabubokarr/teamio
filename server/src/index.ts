import { auth } from "@/core/providers/auth";
import { fileRouter } from "@/core/providers/file";
import { router } from "@/core/router";
import { onError, ORPCError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";
import {
  SimpleCsrfProtectionHandlerPlugin,
  StrictGetMethodPlugin,
} from "@orpc/server/plugins";
import { handleRequest } from "better-upload/server";
import { Hono } from "hono";
import { contextStorage, getContext } from "hono/context-storage";
import { HTTPException } from "hono/http-exception";
import { logger } from "hono/logger";
import { requestId, RequestIdVariables } from "hono/request-id";

const app = new Hono<{
  Variables: RequestIdVariables;
}>();
app.use(contextStorage());
app.use("*", requestId());
app.use(logger());

app.get("/health", (c) => {
  return c.json({ status: "ok" });
});

const rpcHandler = new RPCHandler(router, {
  plugins: [
    new StrictGetMethodPlugin(),
    new SimpleCsrfProtectionHandlerPlugin(),
  ],
  interceptors: [
    onError((error) => {
      const context = getContext();

      console.error("RPC_ERROR", error);
      if (error instanceof ORPCError) {
        error.data.requestId = context.var.requestId;
      }
    }),
  ],
});

/**
 * RPC
 */
app.use("/rpc/*", async (c, next) => {
  const { matched, response } = await rpcHandler.handle(c.req.raw, {
    prefix: "/rpc",
  });

  if (matched) {
    return c.newResponse(response.body, response);
  }

  await next();
});

/**
 * Auth
 */
app.on(["POST", "GET"], "/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

/**
 * File Handling
 */
app.post("/ingest/upload", (c) => {
  return handleRequest(c.req.raw, fileRouter);
});

app.notFound((c) => {
  return c.json(
    {
      message: "Not Found",
      requestId: c.var.requestId,
    },
    {
      status: 404,
    }
  );
});

app.onError((err, c) => {
  if (err instanceof HTTPException && err.status === 500) {
    return c.json(
      {
        message: "Internal Server Error",
        requestId: c.var.requestId,
      },
      {
        status: 500,
      }
    );
  }

  console.error(err);
  return c.json(
    {
      message: err.message,
      requestId: c.var.requestId,
    },
    {
      status: err instanceof HTTPException ? err.status : 500,
    }
  );
});

export default app;
