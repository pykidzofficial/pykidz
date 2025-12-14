import React from "react";
import kidImg from "../assets/pykid.png"; // replace with your actual image

const features = [
  {
    title: "Adventure-Based Learning",
    desc: "Each lesson is a story-driven quest to keep kids engaged and motivated.",
    icon: "https://static.vecteezy.com/system/resources/previews/009/343/162/non_2x/magic-wand-illustration-3d-free-png.png",
    width:62,
  },
  {
    title: "Play While Learning",
    desc: "Games, puzzles, and challenges turn coding into fun missions.",
    icon: "https://static.vecteezy.com/system/resources/previews/009/343/162/non_2x/magic-wand-illustration-3d-free-png.png",
    width:5,
  },
  {
    title: "Kid-Friendly Python",
    desc: "Simple explanations help kids understand real programming concepts.",
    icon: "https://static.vecteezy.com/system/resources/previews/009/343/162/non_2x/magic-wand-illustration-3d-free-png.png",
    width:62,
  },
  {
    title: "Build Real Skills",
    desc: "Kids learn logic, problem-solving, and confidence along the way.",
    icon: "https://static.vecteezy.com/system/resources/previews/009/343/162/non_2x/magic-wand-illustration-3d-free-png.png",
    width:62,
  },
];

const Why = () => {
  return (
    <section className="relative w-full min-h-screen bg-[url('/pygate.png')] bg-cover bg-center bg-no-repeat py-24">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-primarytext drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
            Why kids love{" "}
            <span className="text-primary">PyKidz?</span>
          </h1>

          <p className="mt-6 text-primarytext drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            PyKidz turns learning Python into a magical adventure. Kids explore
            enchanted worlds, solve puzzles, and learn real coding skills while
            having fun.
          </p>
        </div>

        {/* Content */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Kid Image */}
          <div className="flex justify-center">
            <img
              src={kidImg}
              alt="Happy Kid"
              className="max-w-sm w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* Feature Cards */}
          <div className="lg:col-span-2 space-y-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center text-center gap-6 bg-white/10 backdrop-blur-md
                           border-2 border-primary rounded-3xl p-6
                           shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
              >
                {/* Icon */}
                <img
                  src={item.icon}
                  alt=""
                  className="w-20 h-20 object-contain"
                />

                {/* Text */}
                <div className="text-center lg:text-left">
                  <h3 className="text-primary font-heading text-h3 drop-shadow">
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div className={`w-{item.width} h-1 bg-primary mx-auto lg:mx-0 my-2 rounded-full`}/>

                  <p className="text-primarytext">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Why;
