import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { levels } from "../data/levels";

const Story = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();

  const levelData = levels[levelId];
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!levelData || !levelData.storySlides) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        Story not found
      </div>
    );
  }

  const totalSlides = levelData.storySlides.length;
  const isLastSlide = currentSlide === totalSlides - 1;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white">

      {/* Story Image */}
      <img
        src={levelData.storySlides[currentSlide]}
        alt={`Story Slide ${currentSlide + 1}`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navigation UI */}
      <div className="relative z-10 min-h-screen flex items-center justify-between px-6">

        {/* Left */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`w-14 h-14 rounded-full bg-black/60 backdrop-blur-md
          flex items-center justify-center text-2xl
          ${currentSlide === 0 ? "opacity-30 cursor-not-allowed" : ""}`}
        >
          ◀
        </button>

        {/* Counter */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2
          bg-black/60 backdrop-blur-md rounded-full
          px-6 py-2 text-sm">
          {currentSlide + 1} / {totalSlides}
        </div>

        {/* Right */}
        <button
          onClick={nextSlide}
          disabled={isLastSlide}
          className={`w-14 h-14 rounded-full bg-black/60 backdrop-blur-md
          flex items-center justify-center text-2xl
          ${isLastSlide ? "opacity-30 cursor-not-allowed" : ""}`}
        >
          ▶
        </button>
      </div>

      {/* Skip / Go Button */}
      <button
        onClick={() => navigate(`/pycaster/${levelId}`)}
        className={`absolute top-6 right-6 z-20 px-6 py-2 rounded-full text-sm
        transition
        ${
          isLastSlide
            ? "bg-[var(--color-primary)] text-black hover:scale-105"
            : "bg-black/60 text-white hover:bg-[var(--color-primary)] hover:text-black"
        }`}
      >
        {isLastSlide ? "Go to Pycaster" : "Skip Story"}
      </button>
    </div>
  );
};

export default Story;
