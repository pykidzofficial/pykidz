import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { levels } from "../data/levels";

const StartingPage = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();

  const levelData = levels[levelId];

  if (!levelData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Level not found
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${levelData.bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-12 pt-28 text-white">

        {/* Level */}
        <p
          className="text-[24px] font-semibold font-[var(--font-body)]
                     leading-[50px] tracking-[0.05em]"
        >
          Level {levelData.level}
        </p>

        {/* Title */}
        <h1
          className="mt-2 text-[72px] font-bold font-[var(--font-heading)]
                     leading-[50px] tracking-[0.05em]
                     text-[var(--color-primary)]"
        >
          {levelData.title}
        </h1>

        {/* Guardian */}
        <p
          className="mt-4 text-[24px] italic font-[var(--font-body)]
                     leading-[50px] tracking-[0.05em]"
        >
          Guardian: {levelData.guardian}
        </p>

        {/* Stats */}
        <div
          className="flex gap-10 mt-6
                     text-[18px] font-medium
                     leading-[50px] tracking-[0.05em]"
        >
          <span>⭐ {levelData.stars}</span>
          <span>💰 {levelData.coins}</span>
          <span>📖 {levelData.chapter}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 mt-10">
          <button
            onClick={() => navigate(`/story/${levelId}`)}
            className="bg-[var(--color-primary)] text-black
                       px-[18px] py-[9px] rounded-full
                       text-[18px] font-bold
                       leading-[22px]
                       hover:scale-105 transition"
          >
            Start Learning
          </button>

          <button
            className="border border-[var(--color-primary)]
                       text-[var(--color-primary)]
                       px-[18px] py-[9px] rounded-full
                       text-[18px] font-bold
                       leading-[22px]
                       hover:bg-[var(--color-primary)]
                       hover:text-black transition"
          >
            Level Description
          </button>
        </div>

        {/* Description */}
        <p
          className="max-w-3xl mt-8
                     text-[14px] font-normal
                     leading-[22px] tracking-[0]
                     text-white/90"
        >
          {levelData.description}
        </p>
      </div>
    </div>
  );
};

export default StartingPage;
