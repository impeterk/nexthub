"use server";

import { z } from "zod";

const bookConsultationSchema = z.object({
  email: z.string().email("Please provide a valid email"),
  day: z
    .string()
    .min(1, "day cannot be empty")
    .transform((val) => {
      const date = new Date(val);
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date format");
      }
      return date;
    }),
  time: z.string(),
  duration: z.coerce.number(),
});

export const bookConsultaion = async (prevState: any, formData: FormData) => {
  const data = bookConsultationSchema.parse({
    email: formData.get("email"),
    day: formData.get("day"),
    time: formData.get("time"),
    duration: formData.get("duration"),
  });
  console.log({ data });
};

const getInTouchSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please provide valid email"),
  message: z.string().min(1, "Please provide a message"),
});

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
  const { name, email, message } = data.data;
};
