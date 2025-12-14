import React from "react";
import Bruno from "../assets/Bruno.png";
import Luno from "../assets/luno.png";
import Mappo from "../assets/mappo.png";

const characters = [
  {
    name: "Bruno",
    title: "A strong, pure-hearted bear",
    desc: "A strong but innocent bear whose pure heart shields him from shadow logic, always loyal to his friends.",
    img: Bruno,
  },
  {
    name: "Luno",
    title: "Cheerful Sky Messenger",
    desc: "A joyful blue bird filled with curiosity and wonder, guiding kids through adventures with excitement and hope.",
    img: Luno,
  },
  {
    name: "Mappo",
    title: "Magical Map Spirit",
    desc: "A wise floating map who always knows the right path, guiding young coders safely through PyLand.",
    img: Mappo,
  },
];

const Guides = () => {
  return (
    <section className="relative w-full min-h-screen bg-[url('/pygate.png')] bg-cover bg-center bg-no-repeat py-24">
      
      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">

        {/* Heading */}
        <div className="flex justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white">
              Why kids love
              <span className="text-primary"> PyKidz?</span>
            </h1>

            <p className="text-xl text-white mt-4">
              PyKidz turns learning Python into a magical adventure. Kids explore
              enchanted worlds, solve puzzles, and learn real coding skills while
              having fun.
            </p>
          </div>
        </div>

        {/* Characters */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-16 px-6 max-w-7xl mx-auto">
          {characters.map((char, index) => (
            <div key={index} className="text-center">

              <img
                src={char.img}
                alt={char.name}
                className="mx-auto h-72 object-contain"
              />

              <h2 className="text-4xl font-bold text-primary mt-6">
                {char.name}
              </h2>

              <h3 className="text-2xl font-bold text-primary mt-1">
                {char.title}
              </h3>

              <p className="text-lg text-white mt-3">
                {char.desc}
              </p>

              <button className="mt-6 text-lg font-semibold text-primary hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="flex justify-center mt-20">
          <button className="text-xl font-bold text-primary hover:underline">
            Explore All Characters ↓
          </button>
        </div>

      </div>
    </section>
  );
};

export default Guides;
