"use client";

import { IconSend2 } from "@tabler/icons-react";

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
  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>Get in touch</CardTitle>
        <CardDescription>
          Short description for the get in touch form
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="z-50 space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="John Doe" type="text" name="name" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            placeholder="john@doe.com"
            type="email"
            name="email"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Yo mate, bitchin' landing page"
            name="message"
            rows={8}
            className="field-sizing-fixed"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="">
          Send message <IconSend2 className="ml-2 size-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}
