import z from "zod";

import { db } from ".";
import { bookConsultationSchema, getInTouchSchema } from "../shared/schemas";
import { consultationsTable, messagesTable } from "./schema";

export async function insertMessage(data: z.infer<typeof getInTouchSchema>) {
  return await db
    .insert(messagesTable)
    .values(data)
    .onConflictDoNothing()
    .returning();
}

export async function insertConsultation(
  data: z.infer<typeof bookConsultationSchema>,
) {
  return await db
    .insert(consultationsTable)
    .values({
      date: data.day,
      email: data.email,
      start_time: data.time,
      duration: data.duration,
    })
    .onConflictDoNothing()
    .returning();
}
