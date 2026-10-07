import { useEffect, useState } from "react";
import "./Hero.css";

const images = ["/hero/1.webp", "/hero/2.webp", "/hero/3.webp", "/hero/4.webp"];
const IMAGE_SLIDE_INTERVAL_MS = 5000;

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % images.length),
      IMAGE_SLIDE_INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      {images.map((src, i) => (
        <img
          key={src}
          className={`hero-slide${i === current ? " active" : ""}`}
          src={src}
          alt=""
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "auto"}
        />
      ))}
      <div className="hero-content">
        <img className="hero-logo" src="/logo.svg" alt="" />
        <h1>Misión Evangélica Internacional</h1>
        <p>Dios te está esperando</p>
      </div>
    </section>
  );
}
