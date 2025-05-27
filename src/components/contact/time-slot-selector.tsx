"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SessionDuration = 30 | 60;
type TimeSlot = {
  time: string;
  available: boolean;
};

const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  for (let hour = 9; hour < 17; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      // Simulate some unavailable slots
      const available = true;
      slots.push({ time, available });
    }
  }
  return slots;
};
const timeSlots = generateTimeSlots();

export default function TimeSlotSelector({ setSession, setDuration }) {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [sessionDuration, setSessionDuration] = useState<SessionDuration>(30);

  // Generate time slots from 9 AM to 5 PM in 30-minute intervals

  const isSlotSelected = (time: string) => {
    if (!selectedTime) return false;

    if (sessionDuration === 30) {
      return selectedTime === time;
    } else {
      // For 60-minute sessions, check if this slot or the next slot is selected
      const selectedIndex = timeSlots.findIndex(
        (slot) => slot.time === selectedTime,
      );
      const currentIndex = timeSlots.findIndex((slot) => slot.time === time);
      return (
        currentIndex === selectedIndex || currentIndex === selectedIndex + 1
      );
    }
  };

  const canSelectSlot = (time: string) => {
    const currentSlot = timeSlots.find((slot) => slot.time === time);
    if (!currentSlot?.available) return false;

    if (sessionDuration === 60) {
      // For 60-minute sessions, check if the next slot is also available
      const currentIndex = timeSlots.findIndex((slot) => slot.time === time);
      const nextSlot = timeSlots[currentIndex + 1];
      return nextSlot?.available || false;
    }

    return true;
  };

  const handleTimeSelect = (time: string) => {
    if (canSelectSlot(time)) {
      const newTime = selectedTime === time ? "" : time;
      setSelectedTime(newTime);
      setSession(newTime);
      setDuration(sessionDuration);
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl space-y-2 max-lg:mt-2">
      {/* Session Duration Toggle */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Session Duration</label>
        <div className="flex gap-2">
          <Button
            variant={sessionDuration === 30 ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setSessionDuration(30);
              setSelectedTime("");
              setDuration(30);
              setSession("");
            }}
          >
            30 minutes
          </Button>
          <Button
            variant={sessionDuration === 60 ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setSessionDuration(60);
              setSelectedTime("");
              setDuration(60);
              setSession("");
            }}
          >
            1 hour
          </Button>
        </div>
      </div>

      {/* Time Selection */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Available Time Slots</label>
        <div className="grid max-h-80 grid-cols-4 gap-2 overflow-y-auto">
          {timeSlots.map((slot) => (
            <Button
              key={slot.time}
              variant={isSlotSelected(slot.time) ? "default" : "outline"}
              size="sm"
              className={cn(
                "text-xs",
                !canSelectSlot(slot.time) && "cursor-not-allowed opacity-50",
                isSlotSelected(slot.time) &&
                  "bg-primary text-primary-foreground",
              )}
              disabled={!canSelectSlot(slot.time)}
              onClick={() => handleTimeSelect(slot.time)}
            >
              {slot.time}
            </Button>
          ))}
        </div>
      </div>

      {/* Selected Time Display */}
      {/* {selectedTime && (
        <div className="bg-muted space-y-2 rounded-lg p-4">
          <h3 className="font-medium">Selected Time</h3>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">
              {selectedTime} - {getEndTime(selectedTime, sessionDuration)}
            </Badge>
            <span className="text-muted-foreground text-sm">
              ({sessionDuration} minutes)
            </span>
          </div>
        </div>
      )} */}

      {/* Legend */}
      <div className="text-muted-foreground flex items-center gap-4 text-xs">
        <div className="flex items-center gap-1">
          <div className="bg-background h-3 w-3 rounded border"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-muted h-3 w-3 rounded border opacity-50"></div>
          <span>Unavailable</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-primary h-3 w-3 rounded"></div>
          <span>Selected</span>
        </div>
      </div>
    </div>
  );
}
