"use client";

import { projects } from "@/lib/data/projects";

import { HoverEffect } from "../ui/card-hover-effect";

export default function FeaturedProjects() {
  return <HoverEffect items={projects} />;
}
