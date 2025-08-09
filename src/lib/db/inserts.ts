import z from "zod";

import { db } from ".";
import { getInTouchSchema } from "../shared/schemas";
import { messagesTable } from "./schema";

export async function insertMessage(data: z.infer<typeof getInTouchSchema>) {
  return await db
    .insert(messagesTable)
    .values(data)
    .onConflictDoNothing()
    .returning();
}
