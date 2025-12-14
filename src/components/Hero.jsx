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

      {/* 🔹 LAYER 1: Instant Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, #FFD93D 0%, #0B1D2D 55%, #050B12 100%)",
        }}
      />

      {/* 🔹 LAYER 2: Hero Image (blur → sharp) */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          imageLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-lg scale-105"
        }`}
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 🔹 CONTENT (loads instantly) */}
      <div className="relative mt-12 z-10 max-w-4xl mx-auto text-center px-6 flex flex-col items-center">

        <h1 className="text-primarytext font-heading text-h1 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
          Learn Python Through{" "}
          <span className="text-primary">Adventure!</span>
        </h1>

        <p className="mt-2 max-w-2xl text-primarytext opacity-90">
          Enter PyLand — where stories, friendly characters, and magical quests
          help kids learn real Python coding step by step.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-primary text-secondarytext px-8 py-3 rounded-full shadow-lg hover:-translate-y-1 transition">
            Begin Your Journey
          </button>

          <button className="rounded-full border-2 border-primary px-8 py-3 text-primary bg-white/10 backdrop-blur hover:-translate-y-1 transition">
            Meet the Characters
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
