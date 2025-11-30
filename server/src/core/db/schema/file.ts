import * as t from "drizzle-orm/pg-core";
import { createdAt, id } from "../utils";
import { user } from "./auth";

export const file = t.pgTable("file", {
  ...id,
  ...createdAt,

  key: t.text().notNull(),
  uploadedAt: t.timestamp({
    withTimezone: true,
  }),
  type: t.text().notNull(),

  userId: t.text().references(() => user.id),
});
