import React from "react";
import heroImg from "../assets/pyhome.png"; // adjust path if needed

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative mt-12 z-10 max-w-4xl mx-auto text-center px-6 flex flex-col items-center">

        {/* Heading */}
        <h1 className="text-primarytext font-heading text-h1 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
          Learn Python Through{" "}
          <span className="text-primary drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
            Adventure!
          </span>
        </h1>

        {/* Paragraph */}
        <p className="mt-2 max-w-2xl text-primarytext drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
          Enter PyLand — where stories, friendly characters, and magical quests
          help kids learn real Python coding step by step.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          {/* Primary Button */}
          <button
            className="bg-primary text-secondarytext px-8 py-3 rounded-full btn-text
                       shadow-[0_12px_30px_rgba(255,217,61,0.45)]
                       hover:shadow-[0_18px_45px_rgba(255,217,61,0.6)]
                       hover:-translate-y-1 transition-all"
          >
            Begin Your Journey
          </button>

          {/* Secondary Button */}
          <button
            className="rounded-full border-2 border-primary px-8 py-3 btn-text text-primary
                       bg-white/10 backdrop-blur
                       shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                       hover:shadow-[0_16px_45px_rgba(0,0,0,0.45)]
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
