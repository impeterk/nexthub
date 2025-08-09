"use server";

import { insertMessage } from "../db/inserts";
import { bookConsultationSchema, getInTouchSchema } from "../shared/schemas";

export const bookConsultaion = async (prevState: any, formData: FormData) => {
  const data = bookConsultationSchema.safeParse({
    email: formData.get("email"),
    day: formData.get("day"),
    time: formData.get("time"),
    duration: formData.get("duration"),
  });
  if (!data.success) {
    console.log("errors", data.error.flatten().fieldErrors);
    return {
      success: false,
      errors: data.error.flatten().fieldErrors,
    };
  }
  return { success: true, ...data.data };
};

export const getInTouch = async (previousState: any, formData: FormData) => {
  const data = getInTouchSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });
  if (!data.success) {
    return {
      success: false,
      errors: data.error.flatten().fieldErrors,
    };
  }
  const res = await insertMessage(data.data);
  console.log({ res });
};
