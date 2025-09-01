"use client";

import { useParams } from "next/navigation";
import { useActionState } from "react";

import { IconSend2 } from "@tabler/icons-react";

import { getInTouch } from "@/lib/data/actions";
import { useLocales } from "@/lib/data/locales";

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
  const params = useParams<{ lang: "en" | "sk" }>();
  const loc = useLocales(params.lang).contact.git;
  console.log({ state });
  return (
    <Card className="relative">
      <form action={formAction}>
        <input hidden value={params.lang} readOnly name="lang" />
        <CardHeader>
          <CardTitle>{loc.title}</CardTitle>
          <CardDescription dangerouslySetInnerHTML={{ __html: loc.desc }} />
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="z-50 space-y-1">
            <Label htmlFor="name">{loc.name}</Label>
            <Input
              id="name"
              placeholder="John Doe"
              type="text"
              name="name"
              required
            />
            {state?.errors?.name?.[0] && (
              <Label className="text-destructive">{loc.errors.name}</Label>
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
              <Label className="text-destructive">{loc.errors.email}</Label>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="message">{loc.message}</Label>
            <Textarea
              id="message"
              placeholder="Yo mate, bitchin' landing page"
              name="message"
              rows={8}
              className="field-sizing-fixed"
              required
            />
            {state?.errors?.message?.[0] && (
              <Label className="text-destructive">{loc.errors.message}</Label>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="" type="submit" disabled={isPending}>
            {loc.submit} <IconSend2 className="ml-2 size-5" />
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
