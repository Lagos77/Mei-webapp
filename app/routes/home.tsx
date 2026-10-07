import type { Route } from "./+types/home";
import { Hero } from "../components/Hero/Hero";
import { Meetings } from "~/components/Meetings/Meetings";
import { Social } from "~/components/Social/Social";
import { Beliefs } from "~/components/Beliefs/Beliefs";
import { Contact } from "~/components/Contact/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Misión Evangélica Internacional" },
    { name: "description", content: "" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Meetings />
      <Social />
      <Beliefs />
      <Contact />
    </>
  );
}
