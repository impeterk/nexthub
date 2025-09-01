"use server";

import { insertConsultation, insertMessage } from "../db/mutations";
import { bookConsultationSchema, getInTouchSchema } from "../shared/schemas";

const dbError = {
  success: false,
  errors: {
    db: "My database is on a smoke brake, please try again later...",
    email: null,
    name: null,
    message: null,
  },
};

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
  console.log(data);
  const res = await insertConsultation(data.data);
  if (!res.length) {
    return dbError;
  }
  return { success: true };
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
  if (!res.length) {
    return dbError;
  }
  return { sucess: true };
};
