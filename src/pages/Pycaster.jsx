import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import mascot from "../assets/bruno-mascot.png";
import bgImg from "../assets/pyhome.png";

const PyCaster = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();

  // Starter commented code (low opacity guide)
  const starterCode = `# Write a Python print statement below
# Your output should be:
# Hello PyWorld`;

  const [code, setCode] = useState(starterCode);
  const [output, setOutput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [mascotText, setMascotText] = useState(
    "Type the spell to print Hello PyWorld ✨"
  );

  /* ---------------- RUN CODE ---------------- */
  const runCode = () => {
    // Very simple Python-like validation (kid safe)
    const normalized = code.replace(/\s/g, "").toLowerCase();

    if (
      normalized.includes("print('hellopyworld')") ||
      normalized.includes('print("hellopyworld")')
    ) {
      setOutput("Hello PyWorld");
      setIsCorrect(true);
      setMascotText("Awesome! 🎉 Now submit the spell!");
    } else {
      setOutput("❌ Error: Output not correct");
      setIsCorrect(false);
      setMascotText("Hmm… check your code 🧐");
    }
  };

  /* ---------------- SUBMIT ---------------- */
  const submitCode = () => {
    if (isCorrect) {
      navigate("/reward");
    } else {
      setMascotText("You must fix the spell before submitting ❗");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white overflow-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-28">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400">
            PyCaster — Level {levelId}
          </h1>
          <p className="text-white/80 mt-2">
            The Spellcasting Code Editor of PyLand
          </p>
        </div>

        {/* CHALLENGE */}
        <p className="text-center max-w-3xl mx-auto mb-8 text-white/90">
          <span className="text-yellow-300 font-semibold">
            Challenge 1:
          </span>{" "}
          Cast a spell that prints <b>Hello PyWorld</b>
        </p>

        {/* EDITOR */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl">

            {/* Code Area */}
            <div className="rounded-2xl border-4 border-yellow-400
                            bg-[#1e1e1e] shadow-2xl p-6">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-48 bg-transparent
                           font-mono text-sm resize-none
                           focus:outline-none"
                spellCheck="false"
                style={{
                  color: "#9AE6B4", // green
                  opacity: code === starterCode ? 0.5 : 1,
                }}
              />
            </div>

            {/* OUTPUT */}
            <div className="mt-4 bg-black/60 rounded-xl px-4 py-3
                            font-mono text-sm text-green-400 min-h-[40px]">
              {output || "▶ Output will appear here"}
            </div>

            {/* BUTTONS */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={runCode}
                className="px-6 py-2 rounded-full bg-yellow-400 text-black
                           font-semibold hover:scale-105 transition"
              >
                Run
              </button>

              <button
                className="px-6 py-2 rounded-full bg-yellow-400 text-black
                           font-semibold hover:scale-105 transition"
                onClick={() =>
                  setMascotText(
                    "Use print('Hello PyWorld') 🧠"
                  )
                }
              >
                Hint
              </button>

              <button
                onClick={submitCode}
                className={`px-6 py-2 rounded-full font-semibold transition
                  ${
                    isCorrect
                      ? "bg-yellow-400 text-black hover:scale-105"
                      : "bg-gray-600 text-black/50 cursor-not-allowed"
                  }`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🧙‍♂️ MASCOT — FIXED BOTTOM LEFT */}
      <div className="fixed bottom-0.5 left-6 z-20 flex items-end gap-3">
        <img
          src={mascot}
          alt="PyKid Mascot"
          className="w-28 md:w-36 drop-shadow-2xl"
        />

        <div className="bg-white text-black px-4 py-2 rounded-xl
                        shadow-lg text-sm font-medium max-w-[200px]">
          {mascotText}
        </div>
      </div>
    </div>
  );
};

export default PyCaster;
