import React, { useEffect, useState } from "react";
import heroImg from "../assets/pyhome.png";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroImg;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🔹 LAYER 1: Professional Premium Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at top,
              #3A2416 0%,
              #1F2A33 45%,
              #070B10 100%
            )
          `,
        }}
      />

      {/* 🔹 LAYER 2: Hero Image (progressive reveal) */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          imageLoaded
            ? "opacity-100 blur-0 scale-100"
            : "opacity-0 blur-lg scale-105"
        }`}
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 🔹 Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* 🔹 CONTENT */}
      <div className="relative mt-12 z-10 max-w-4xl mx-auto text-center px-6 flex flex-col items-center">

        <h1 className="text-primarytext font-heading text-h1 drop-shadow-[0_6px_14px_rgba(0,0,0,0.7)]">
          Learn Python Through{" "}
          <span className="text-primary">Adventure!</span>
        </h1>

        <p className="mt-3 max-w-2xl text-primarytext/90 drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
          Enter PyLand — where stories, friendly characters, and magical quests
          help kids learn real Python coding step by step.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          <button
            className="bg-primary text-secondarytext px-8 py-3 rounded-full btn-text
                       shadow-[0_14px_35px_rgba(255,217,61,0.45)]
                       hover:shadow-[0_20px_50px_rgba(255,217,61,0.6)]
                       hover:-translate-y-1 transition-all"
          >
            Begin Your Journey
          </button>

          <button
            className="rounded-full border-2 border-primary px-8 py-3 btn-text text-primary
                       bg-white/10 backdrop-blur
                       shadow-[0_12px_30px_rgba(0,0,0,0.4)]
                       hover:shadow-[0_18px_45px_rgba(0,0,0,0.5)]
                       hover:-translate-y-1 transition-all"
          >
            Meet the Characters
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
