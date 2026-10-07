import type { Route } from "./+types/home";
import { Hero } from "../components/Hero/Hero";
import { Meetings } from "~/components/Meetings/Meetings";
import { Social } from "~/components/Social/Social";
import { Beliefs } from "~/components/Beliefs/Beliefs";
import { Contact } from "~/components/Contact/Contact";

export function meta({}: Route.MetaArgs) {
  const title = "Misión Evangélica Internacional";
  const description =
    "Iglesia en Hägersten, Estocolmo. Dios te está esperando. Servicio domingo 11:00.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: "https://iemsweden.com/og-image.jpg" },
    { property: "og:url", content: "https://iemsweden.com/" },
    { name: "twitter:card", content: "summary_large_image" },
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
