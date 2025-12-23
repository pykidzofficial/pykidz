import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { levels } from "../data/levels";
import kidStoryVideo from "../assets/story/level1/videos/kidstory.mp4";

const AUTO_PLAY_DELAY = 3500;

const Story = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const levelData = levels[levelId];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight
  );
  const [isPaused, setIsPaused] = useState(false);
  const [storyMode, setStoryMode] = useState(null); // null | images | video
  const [storyCompleted, setStoryCompleted] = useState(false); // ⭐ NEW

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

    if (screen.orientation?.lock && !storyCompleted) {
      screen.orientation.lock("landscape").catch(() => {});
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [storyCompleted]);

  /* ----------------------------------
     AUTO NAVIGATE AFTER PORTRAIT
  ---------------------------------- */
  useEffect(() => {
    if (storyCompleted && !isLandscape) {
      navigate(`/pycaster/${levelId}`);
    }
  }, [storyCompleted, isLandscape, navigate, levelId]);

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
     AUTO PLAY (IMAGES ONLY)
  ---------------------------------- */
  useEffect(() => {
    if (storyMode !== "images") return;
    if (isPaused || isLastSlide) return;

    autoPlayRef.current = setTimeout(() => {
      setCurrentSlide((prev) => prev + 1);
    }, AUTO_PLAY_DELAY);

    return () => clearTimeout(autoPlayRef.current);
  }, [currentSlide, isPaused, isLastSlide, storyMode]);

  /* ----------------------------------
     SLIDE CONTROLS
  ---------------------------------- */
  const nextSlide = () => {
    setIsPaused(true);
    if (!isLastSlide) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      setStoryCompleted(true);
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
     PORTRAIT RECOMMENDATION (AFTER STORY)
  ---------------------------------- */
  if (storyCompleted && isLandscape) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
        <div className="text-7xl mb-6 animate-bounce">📱↻</div>
        <h2 className="text-3xl font-bold mb-3 text-yellow-400">
          Rotate to Portrait
        </h2>
        <p className="text-white/80 max-w-sm">
          The adventure continues in portrait mode.
        </p>
      </div>
    );
  }

  /* ----------------------------------
     LANDSCAPE BLOCK (BEFORE STORY)
  ---------------------------------- */
  if (!isLandscape && !storyCompleted) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
        <div className="text-6xl mb-6">📱↻</div>
        <h2 className="text-2xl font-bold mb-2">Rotate Your Phone</h2>
        <p className="text-white/80 max-w-xs">
          This story is best experienced in landscape mode.
        </p>
      </div>
    );
  }

  /* ----------------------------------
     STORY MODE SELECTION
  ---------------------------------- */
  if (!storyMode) {
    return (
      <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold mb-4">
          How do you want to experience the story?
        </h1>

        <p className="text-white/70 mb-8 max-w-md">
          Choose between an interactive image story or a cinematic video.
        </p>

        <div className="flex gap-6">
          <button
            onClick={() => setStoryMode("images")}
            className="px-8 py-4 rounded-xl bg-[var(--color-primary)] text-black font-semibold hover:scale-105 transition"
          >
            🖼️ View Images
          </button>

          <button
            onClick={() => setStoryMode("video")}
            className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
          >
            🎬 Watch Video
          </button>
        </div>
      </div>
    );
  }

  /* ----------------------------------
     VIDEO MODE
  ---------------------------------- */
  if (storyMode === "video") {
    return (
      <div className="fixed inset-0 bg-black">
        <video
          src={kidStoryVideo}
          autoPlay
          controls
          className="w-full h-full object-cover"
          onEnded={() => setStoryCompleted(true)}
        />
      </div>
    );
  }

  /* ----------------------------------
     IMAGE STORY VIEW
  ---------------------------------- */
  return (
    <div
      className="fixed inset-0 bg-black text-white overflow-hidden"
      style={{ height: "100svh", width: "100vw" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={() => setIsPaused(true)}
    >
      <img
        key={currentSlide}
        src={levelData.storySlides[currentSlide]}
        alt={`Story Slide ${currentSlide + 1}`}
        className="absolute inset-0 w-screen h-screen object-cover select-none animate-kenburns"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full h-full flex items-center justify-between px-6">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="w-14 h-14 rounded-full bg-black/60 flex items-center justify-center text-2xl disabled:opacity-30"
        >
          ◀
        </button>

        <button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-black/60 flex items-center justify-center text-2xl"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Story;
