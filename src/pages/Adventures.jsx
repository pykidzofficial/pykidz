import React from "react";
import { useNavigate } from "react-router-dom";

import Nav from "../components/Nav";
import mapImg from "../assets/pyland-map.png";
import heroImg from "../assets/pyhome.png";
import { islands } from "../data/islands";

const Adventures = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Navigation */}
      <Nav activePage="Adventures" />

      {/* Page Content */}
      <div className="relative z-10 pt-28 flex items-center justify-center px-4 pb-20">
        {/* Map Container */}
        <div
          className="relative w-full max-w-6xl overflow-hidden
                     rounded-xl
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
              className={`
                absolute flex items-center justify-center
                rounded-full font-bold
                transition-all duration-300
                border-4 border-white

                /* Responsive sizes */
                w-7 h-7 text-xs
                md:w-9 md:h-9 md:text-sm
                lg:w-11 lg:h-11 lg:text-base

                ${
                  island.unlocked
                    ? "bg-yellow-400 text-black hover:scale-110 shadow-lg"
                    : "bg-black/70 text-white/60 cursor-not-allowed"
                }
              `}
              style={{
                left: `${island.x}%`,
                top: `${island.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => {
                if (island.unlocked) {
                  navigate(`/level/${island.id}`);
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
