import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/pyhome.png";

const Reward = () => {
  const navigate = useNavigate();

  /* ----------------------------------
     CONFETTI GENERATOR
  ---------------------------------- */
  useEffect(() => {
    const confettiContainer = document.getElementById("confetti");

    for (let i = 0; i < 30; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "%";
      piece.style.animationDelay = Math.random() * 2 + "s";
      piece.style.backgroundColor =
        ["#FFD93D", "#FF9770", "#8FE6A2", "#4F8DF7"][
          Math.floor(Math.random() * 4)
        ];
      confettiContainer.appendChild(piece);
    }

    return () => (confettiContainer.innerHTML = "");
  }, []);

  return (
    <div
      className="min-h-screen relative bg-black text-white flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* CONFETTI */}
      <div id="confetti" className="absolute inset-0 pointer-events-none z-20" />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Reward Card */}
      <div
        className="relative z-30 bg-black/60 backdrop-blur-xl
                   rounded-3xl px-10 py-12 text-center
                   shadow-[0_40px_100px_rgba(0,0,0,0.9)]
                   max-w-lg w-full animate-floatCard"
      >
        {/* STARS */}
        <div className="flex justify-center gap-4 mb-6">
          <span className="text-6xl animate-starPulse">⭐</span>
          <span className="text-7xl animate-starGlow">⭐</span>
          <span className="text-6xl animate-starPulse">⭐</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-yellow-400 mb-4 animate-pop">
          Level Completed!
        </h1>

        {/* Rewards */}
        <div className="flex justify-center gap-8 text-xl mb-6">
          <div className="animate-slideUp">
            ⚡ <span className="font-bold">+120 XP</span>
          </div>
          <div className="animate-slideUp delay-150">
            💰 <span className="font-bold">+60 Coins</span>
          </div>
        </div>

        {/* Extra Info */}
        <p className="text-white/80 text-sm mb-8 animate-fadeIn delay-300">
          You mastered the basics of Python syntax and unlocked the next adventure.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/adventures")}
            className="bg-yellow-400 text-black px-6 py-3
                       rounded-full font-semibold
                       hover:scale-110 transition
                       animate-buttonBounce"
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
