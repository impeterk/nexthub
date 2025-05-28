"use client";

import { useState } from "react";

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

  return (
    <Card>
      <form action={bookConsultaion}>
        <input hidden value={String(date)} name="day" type="text" readOnly />
        <input
          hidden
          value={`${session} - ${getEndTime(session, duration)}`}
          name="time"
          type="text"
          readOnly
        />
        <CardHeader>
          <CardTitle>Book a consultation</CardTitle>
          <CardDescription>
            short description for book a consultation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
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
          <Button type="submit">
            Book a consultation{" "}
            <IconCalendarPlus className="ml-2 size-4" />{" "}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
