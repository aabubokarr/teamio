import { env } from "@/env";
import { drizzle } from "drizzle-orm/neon-http";
import { EnhancedQueryLogger } from "drizzle-query-logger";
import * as schema from "./schema";

export const db = drizzle({
  connection: {
    connectionString: env.DATABASE_URL,
  },
  casing: "snake_case",
  schema,
  logger: new EnhancedQueryLogger({
    log: (message) => {
      if (env.ENVIRONMENT !== "production") {
        console.log(message);
      }
    },
  }),
});
