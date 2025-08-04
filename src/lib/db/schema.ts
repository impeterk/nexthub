import {
  boolean,
  pgEnum,
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

const durationEnum = pgEnum("duration", ["30", "60"]);
export const consultationsTable = pgTable("consultations", {
  id: uuid().primaryKey().defaultRandom(),
  email: varchar({ length: 255 }).notNull(),
  created_at: timestamp({ mode: "date" }).notNull().defaultNow(),
  date: timestamp({ mode: "date" }).notNull(),
  start_time: varchar({ length: 255 }).notNull(),
  duration: durationEnum(),
});
