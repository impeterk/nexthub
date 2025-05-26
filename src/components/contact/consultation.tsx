"use client";

import { useState } from "react";

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

export default function BookConsultation() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Card>
      <CardHeader>
        <CardTitle>Book a consultation</CardTitle>
        <CardDescription>
          short description for book a consultation
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center md:flex-row">
        <Calendar
          onSelect={setDate}
          selected={date}
          mode="single"
          className="w-full"
          disabled={(date) =>
            date < new Date() || date < new Date("1900-01-01")
          }
          initialFocus
        />
      </CardContent>
      <CardFooter>
        <Button>Save password</Button>
      </CardFooter>
    </Card>
  );
}
