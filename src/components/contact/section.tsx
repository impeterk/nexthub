import { IconSend2 } from "@tabler/icons-react";

import { WordRotate } from "../magicui/word-rotate";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Textarea } from "../ui/textarea";

const words = ["Get in Touch", "Book a consultation"];

export default function ContactSection() {
  return (
    <>
      <section className="z-[40] my-10 min-h-[50vh] overflow-hidden bg-transparent antialiased">
        <WordRotate
          duration={5000}
          words={words}
          className="bg-opacity-50 from-foreground to-primary bg-gradient-to-b bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl"
        />

        <div className="container mt-10 grid place-items-center">
          <Tabs
            defaultValue="contact"
            className="min-w-0 max-md:w-full md:min-w-lg"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="contact">Get in touch</TabsTrigger>
              <TabsTrigger value="consultation">
                Book a consultation
              </TabsTrigger>
            </TabsList>
            <TabsContent value="contact">
              <Card>
                <CardHeader>
                  <CardTitle>Get in touch</CardTitle>
                  <CardDescription>
                    Short description for the get in touch form
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      type="text"
                      name="name"
                    />
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
            </TabsContent>
            <TabsContent value="consultation">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1"></div>
                  <div className="space-y-1"></div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
