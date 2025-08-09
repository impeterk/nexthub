"use client";

import { useActionState } from "react";

import { IconSend2 } from "@tabler/icons-react";

import { getInTouch } from "@/lib/data/actions";

import { Button } from "../ui/button";
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
import { Textarea } from "../ui/textarea";

export function GetInTouch() {
  const [state, formAction, isPending] = useActionState(getInTouch, null);
  console.log({ state });
  return (
    <Card className="relative">
      <form action={formAction}>
        <CardHeader>
          <CardTitle>Get in touch</CardTitle>
          <CardDescription>
            Have a project in mind or need a developer's insight? <br />
            Reach out below—I'd love to hear from you!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="z-50 space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              type="text"
              name="name"
              required
            />
            {state?.errors?.name?.[0] && (
              <Label className="text-destructive">Name is required</Label>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              placeholder="john@doe.com"
              type="email"
              name="email"
              required
            />
            {state?.errors?.email?.[0] && (
              <Label className="text-destructive">
                Please provide a valid email
              </Label>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Yo mate, bitchin' landing page"
              name="message"
              rows={8}
              className="field-sizing-fixed"
              required
            />
            {state?.errors?.message?.[0] && (
              <Label className="text-destructive">
                Please provide lovely message
              </Label>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="" type="submit" disabled={isPending}>
            Send message <IconSend2 className="ml-2 size-5" />
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
