import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { levels } from "../data/levels";

const AUTO_PLAY_DELAY = 3500; // 3.5 seconds

const Story = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const levelData = levels[levelId];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight
  );
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const autoPlayRef = useRef(null);

  /* ----------------------------------
     ORIENTATION HANDLING
  ---------------------------------- */
  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Try to lock landscape (best effort)
    if (screen.orientation?.lock) {
      screen.orientation.lock("landscape").catch(() => {});
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!levelData || !levelData.storySlides) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        Story not found
      </div>
    );
  }

  const totalSlides = levelData.storySlides.length;
  const isLastSlide = currentSlide === totalSlides - 1;

  /* ----------------------------------
     AUTO PLAY
  ---------------------------------- */
  useEffect(() => {
    if (isPaused || isLastSlide) return;

    autoPlayRef.current = setTimeout(() => {
      setCurrentSlide((prev) => prev + 1);
    }, AUTO_PLAY_DELAY);

    return () => clearTimeout(autoPlayRef.current);
  }, [currentSlide, isPaused, isLastSlide]);

  /* ----------------------------------
     SLIDE CONTROLS
  ---------------------------------- */
  const nextSlide = () => {
    setIsPaused(true);
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    setIsPaused(true);
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  /* ----------------------------------
     SWIPE HANDLERS
  ---------------------------------- */
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;

    if (distance > 60) nextSlide();
    if (distance < -60) prevSlide();
  };

  /* ----------------------------------
     PORTRAIT BLOCK
  ---------------------------------- */
  if (!isLandscape) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
        <div className="text-6xl mb-6">📱↻</div>
        <h2 className="text-2xl font-bold mb-2">
          Rotate Your Phone
        </h2>
        <p className="text-white/80 max-w-xs">
          This story is best experienced in landscape mode.
        </p>
      </div>
    );
  }

  /* ----------------------------------
     STORY VIEW
  ---------------------------------- */
  return (
    <div
      className="fixed inset-0 bg-black text-white overflow-hidden"
      style={{ height: "100svh", width: "100vw" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={() => setIsPaused(true)}
    >
      {/* STORY IMAGE WITH PARALLAX + SLOW ZOOM */}
      <img
        key={currentSlide}
        src={levelData.storySlides[currentSlide]}
        alt={`Story Slide ${currentSlide + 1}`}
        className="
          absolute inset-0
          w-screen h-screen
          object-cover object-center
          select-none
          animate-kenburns
        "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* NAVIGATION UI */}
      <div className="relative z-10 w-full h-full flex items-center justify-between px-6">

        {/* PREVIOUS */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`w-14 h-14 rounded-full bg-black/60 backdrop-blur-md
          flex items-center justify-center text-2xl
          ${currentSlide === 0 ? "opacity-30 cursor-not-allowed" : ""}`}
        >
          ◀
        </button>

        {/* SLIDE COUNTER */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2
          bg-black/60 backdrop-blur-md rounded-full
          px-6 py-2 text-sm">
          {currentSlide + 1} / {totalSlides}
        </div>

        {/* NEXT */}
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

      {/* SKIP / GO BUTTON */}
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
