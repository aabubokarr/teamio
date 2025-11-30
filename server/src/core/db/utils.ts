import { createId } from "@paralleldrive/cuid2";
import * as t from "drizzle-orm/pg-core";

export const generateId = createId;

export const id = {
  id: t
    .text()
    .primaryKey()
    .$defaultFn(() => createId()),
};

export const createdAt = {
  createAt: t
    .timestamp({
      withTimezone: true,
    })
    .defaultNow()
    .notNull(),
};

export const updatedAt = {
  updatedAt: t
    .timestamp({
      withTimezone: true,
    })
    .notNull()
    .$onUpdate(() => new Date()),
};

export const deletedAt = {
  deletedAt: t.timestamp({
    withTimezone: true,
  }),
};
