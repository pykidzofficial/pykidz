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

        {/* LEVEL */}
        <p className="level-text">
          Level {levelData.level}
        </p>

        {/* TITLE */}
        <h1 className="level-title text-[var(--color-primary)] mt-2">
          {levelData.title}
        </h1>

        {/* GUARDIAN */}
        <p className="guardian-text mt-4">
          Guardian: {levelData.guardian}
        </p>

        {/* STATS */}
        <div className="flex gap-10 mt-6 text-[18px] font-medium font-nunito">
          <span>⭐ {levelData.stars}</span>
          <span>💰 {levelData.coins}</span>
          <span>📖 {levelData.chapter}</span>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-6 mt-10">
          <button
            onClick={() => navigate(`/story/${levelId}`)}
            className="bg-[var(--color-primary)] text-black
                       px-[18px] py-[9px] rounded-full
                       button-text hover:scale-105 transition"
          >
            Start Learning
          </button>

          <button
            className="border border-[var(--color-primary)]
                       text-[var(--color-primary)]
                       px-[18px] py-[9px] rounded-full
                       button-text
                       hover:bg-[var(--color-primary)]
                       hover:text-black transition"
          >
            Level Description
          </button>
        </div>

        {/* DESCRIPTION */}
        <p className="paragraph-text max-w-3xl mt-8 text-white/90">
          {levelData.description}
        </p>
      </div>
    </div>
  );
};

export default StartingPage;
