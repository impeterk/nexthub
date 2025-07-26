import {
  boolean,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const messagesTable = pgTable("messages", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  message: text().notNull(),
  read: boolean().notNull().default(false),
  created_at: timestamp({ mode: "date" }).notNull().defaultNow(),
});
