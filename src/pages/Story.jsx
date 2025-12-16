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

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      // ✅ Last slide → go to Pycaster
      navigate(`/pycaster`);
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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* UI Layer */}
      <div className="relative z-10 min-h-screen flex items-center justify-between px-6">

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`w-14 h-14 rounded-full bg-black/60 backdrop-blur-md
            flex items-center justify-center text-2xl
            transition hover:scale-110
            ${currentSlide === 0 ? "opacity-30 cursor-not-allowed" : ""}`}
        >
          ◀
        </button>

        {/* CENTER INFO */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2
                        bg-black/60 backdrop-blur-md rounded-full
                        px-6 py-2 text-sm tracking-wide">
          {currentSlide + 1} / {totalSlides}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md
                     flex items-center justify-center text-2xl
                     transition hover:scale-110"
        >
          ▶
        </button>
      </div>

      {/* SKIP BUTTON */}
      <button
        onClick={() => navigate(`/pycaster`)}
        className="absolute top-6 right-6 z-20
                   bg-black/60 backdrop-blur-md
                   px-5 py-2 rounded-full text-sm
                   hover:bg-[var(--color-primary)]
                   hover:text-black transition"
      >
        Skip Story
      </button>
    </div>
  );
};

export default Story;
