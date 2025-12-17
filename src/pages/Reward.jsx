import React from "react";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/pyhome.png";
const Reward = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative bg-black text-white flex items-center justify-center" style={{ backgroundImage: `url(${bgImg})` }}>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Reward Card */}
      <div className="relative z-10 bg-black/60 backdrop-blur-xl
                      rounded-3xl px-10 py-12 text-center
                      shadow-[0_40px_100px_rgba(0,0,0,0.9)]
                      max-w-lg w-full">

        {/* Stars */}
        <div className="flex justify-center gap-4 mb-6">
          <span className="text-6xl">⭐</span>
          <span className="text-7xl">⭐</span>
          <span className="text-6xl">⭐</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Level Completed!
        </h1>

        {/* Rewards */}
        <div className="flex justify-center gap-8 text-xl mb-6">
          <div>⚡ <span className="font-bold">+120 XP</span></div>
          <div>💰 <span className="font-bold">+60 Coins</span></div>
        </div>

        {/* Extra Info */}
        <p className="text-white/80 text-sm mb-8">
          You mastered the basics of Python syntax and unlocked the next adventure.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/adventures")}
            className="bg-yellow-400 text-black px-6 py-3
                       rounded-full font-semibold
                       hover:scale-105 transition"
          >
            Next Level
          </button>

          <button
            onClick={() => navigate("/pycaster")}
            className="border border-yellow-400 text-yellow-400
                       px-6 py-3 rounded-full font-semibold
                       hover:bg-yellow-400 hover:text-black transition"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reward;
