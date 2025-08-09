import z from "zod";

export const getInTouchSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please provide valid email"),
  message: z.string().min(1, "Please provide a message"),
});

export const bookConsultationSchema = z.object({
  email: z.string().email("Please provide a valid email"),
  day: z
    .string()
    .min(1, "Please select a date and time")
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
