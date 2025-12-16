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
      className="min-h-screen bg-cover bg-center relative text-white"
      style={{ backgroundImage: `url(${levelData.bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-12 pt-28">

        {/* Level */}
        <p className="level-text">
          Level {levelData.level}
        </p>

        {/* Title */}
        <h1 className="level-title text-[var(--color-primary)] mt-2">
          {levelData.title}
        </h1>

        {/* Guardian */}
        <p className="guardian-text mt-4">
          Guardian: {levelData.guardian}
        </p>

        {/* Stats */}
        <div className="flex gap-8 mt-6 level-text text-white">
          <span>⭐ {levelData.stars}</span>
          <span>💰 {levelData.coins}</span>
          <span>📖 {levelData.chapter}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 mt-10">
          <button
            onClick={() => navigate(`/pycaster/${levelId}`)}
            className="button-text bg-[var(--color-primary)] text-black
                       px-[18px] py-[9px] rounded-full
                       hover:scale-105 transition"
          >
            Start Learning
          </button>

          <button
            className="button-text border border-[var(--color-primary)]
                       text-[var(--color-primary)]
                       px-[18px] py-[9px] rounded-full
                       hover:bg-[var(--color-primary)]
                       hover:text-black transition"
          >
            Level Description
          </button>
        </div>

        {/* Description */}
        <p className="paragraph-text max-w-3xl mt-8 text-white/90">
          {levelData.description}
        </p>
      </div>
    </div>
  );
};

export default StartingPage;
