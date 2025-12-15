import React from "react";
import badge from "../assets/Badges.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Badges = () => {
  return (
    <section className="relative w-full min-h-screen bg-[url('/pygate.png')] bg-cover bg-center bg-no-repeat">

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* 🔹 Content */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-6
                   py-24 sm:py-28 md:py-36 lg:py-44 text-center"
      >
        {/* 🔹 Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
          PyLand’s{" "}
          <span className="text-yellow-400">Journey Badges</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/90 mt-6">
          Earn magical rewards as you learn and explore.
        </p>

        {/* 🔹 Badge + Arrows */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-12 mt-20 md:mt-28">

          {/* Left Arrow */}
          <button className="text-yellow-400 transition hover:scale-110">
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </button>

          {/* Badge */}
          <div className="relative">
            <img
              src={badge}
              alt="Creation Badge"
              className="
                w-28 h-28                 /* mobile */
                sm:w-36 sm:h-36           /* small tablets */
                md:w-56 md:h-56           /* tablets */
                lg:w-72 lg:h-72           /* desktop */
                xl:w-80 xl:h-80           /* large screens */

                object-cover
                rounded-full
                border-4 border-yellow-400
                shadow-[0_0_40px_rgba(250,204,21,0.55)]
              "
            />
          </div>

          {/* Right Arrow */}
          <button className="text-yellow-400 transition hover:scale-110">
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </button>
        </div>

        {/* 🔹 Badge Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mt-20 md:mt-24">
          The Creation Badge – “Birth of PyLand”
        </h2>

        {/* 🔹 Description */}
        <p
          className="max-w-4xl mx-auto text-white/90
                     text-base sm:text-lg md:text-xl
                     mt-10 md:mt-12 leading-relaxed italic"
        >
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
