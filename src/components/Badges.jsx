import React from "react";
import badge from "../assets/Badges.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Badges = () => {
  return (
    <section className="relative w-full min-h-screen bg-[url('/pygate.png')] bg-cover bg-center bg-no-repeat">

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6
                      py-28 md:py-36 lg:py-44 text-center">

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
          PyLand’s{" "}
          <span className="text-yellow-400">Journey Badges</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 mt-6">
          Earn magical rewards as you learn and explore.
        </p>

        {/* Badge + Arrows */}
        <div className="flex items-center justify-center gap-12 mt-28">

          {/* Left Arrow */}
          <button className="text-yellow-400 hover:scale-110 transition">
            <ChevronLeft size={52} />
          </button>

          {/* Badge */}
          <div className="relative">
            <img
              src={badge}
              alt="Creation Badge"
              className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80
                         rounded-full border-4 border-yellow-400
                         shadow-[0_0_60px_rgba(250,204,21,0.65)]"
            />
          </div>

          {/* Right Arrow */}
          <button className="text-yellow-400 hover:scale-110 transition">
            <ChevronRight size={52} />
          </button>
        </div>

        {/* Badge Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mt-24">
          The Creation Badge – “Birth of PyLand”
        </h2>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-white/90 text-lg md:text-xl
                      mt-12 leading-relaxed italic">
          This badge honors the moment when the three ancient Guardians —
          Thalanor, Arlon, and Mira — shaped PyLand from pure cosmic energy.
          Their masterpiece, the radiant Code of Light, rose like a living beam
          from Mount Syntax, filling the world with life, balance, and harmony.
          The mountain’s hidden halls stored every secret scroll, ancient
          terminal, and glowing reference that kept the realm alive.
          <br /><br />
          Awarded only to those who understand the beginning of all logic,
          this badge marks the first step into the legacy of the Guardians.
        </p>

      </div>
    </section>
  );
};

export default Badges;
