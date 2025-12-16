import React from "react";
import mapImg from "../assets/pyland-map.png";
import { islands } from "../data/islands";
import Nav from "../components/Nav";
import heroImg from "../assets/pyhome.png";
const Adventures = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Navigation */}
      <Nav activePage="Adventures" />

      {/* Content */}
      <div className="relative z-10 pt-28 flex items-center justify-center px-4 pb-20">

        {/* Map Container */}
        <div
          className="relative w-full max-w-6xl overflow-hidden
                     shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
        >
          {/* Map Image */}
          <img
            src={mapImg}
            alt="PyLand Map"
            className="w-full h-full object-contain bg-black"
          />

          {/* Island Markers */}
          {islands.map((island) => (
            <button
              key={island.id}
              className={`absolute flex items-center justify-center
                rounded-full font-bold transition-all duration-300
                ${
                  island.unlocked
                    ? "bg-yellow-400 text-black hover:scale-110 shadow-lg"
                    : "bg-black/70 text-white/60 cursor-not-allowed"
                }
              `}
              style={{
                left: `${island.x}%`,
                top: `${island.y}%`,
                width: "44px",
                height: "44px",
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => {
                if (island.unlocked) {
                  alert(`Go to ${island.name}`);
                }
              }}
            >
              {island.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adventures;
