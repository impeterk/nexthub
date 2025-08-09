"use client";

import { FormEvent, useActionState, useState, useTransition } from "react";

import { IconCalendarPlus } from "@tabler/icons-react";

import { bookConsultaion } from "@/lib/data/actions";

import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import TimeSlotSelector from "./time-slot-selector";

type SessionDuration = 30 | 60;

const getEndTime = (startTime: string, duration: SessionDuration) => {
  const [hours, minutes] = startTime.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes + duration;
  const endHours = Math.floor(totalMinutes / 60);
  const endMins = totalMinutes % 60;
  return `${endHours.toString().padStart(2, "0")}:${endMins.toString().padStart(2, "0")}`;
};

export default function BookConsultation() {
  const [date, setDate] = useState<Date | undefined>(
    new Date(Date.now() + 24 * 60 * 60 * 1000),
  );

  const [session, setSession] = useState<string>("");
  const [duration, setDuration] = useState<SessionDuration>(30);
  const [email, setEmail] = useState<string>("");
  const enableSend = session && duration && email;

  const [state, formAction] = useActionState(bookConsultaion, null);
  const [isPending, startTransition] = useTransition();
  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const data = new FormData();
    data.set("email", email);
    data.set("day", String(date));
    data.set("time", session);
    data.set("duration", String(duration));
    startTransition(async () => {
      formAction(data);
    });
  }
  function handleEmailChange(value: string) {
    setEmail(value);
    if (state?.errors?.email) state.errors.email = [""];
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Book a consultation</CardTitle>
          <CardDescription>
            Ready to discuss your project? Book a consultation and let's bring
            your ideas to life.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-1">
            <Label htmlFor="email" className="mb-1">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
            />
            <label
              htmlFor="email"
              className="text-destructive"
              dangerouslySetInnerHTML={{
                __html: state?.errors?.email?.[0] || "&nbsp;",
              }}
            ></label>
          </div>
          <div className="mb-4 flex flex-col items-center justify-center md:flex-row">
            <Calendar
              onSelect={setDate}
              selected={date}
              mode="single"
              className="w-full"
              disabled={(date) =>
                date <= new Date() || date < new Date("1900-01-01")
              }
              fromDate={new Date(date?.getFullYear()!, date?.getMonth()!)}
              initialFocus
            />
            <TimeSlotSelector
              setSession={setSession}
              setDuration={setDuration}
            />
          </div>
          {session && date && (
            <div className="bg-muted space-y-2 rounded-lg p-4">
              <h3 className="font-medium">Selected time and date</h3>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">
                  {date.toLocaleDateString("sk")}
                </span>
                <span className="">
                  {session} - {getEndTime(session, duration)}
                </span>
                <span className="text-muted-foreground text-sm">
                  ({duration} minutes)
                </span>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            type="submit"
            disabled={isPending || !enableSend}
          >
            Book a consultation{" "}
            <IconCalendarPlus className="ml-2 size-4" />{" "}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
