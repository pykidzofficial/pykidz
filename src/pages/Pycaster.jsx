import React, { useState } from "react";
import mascot from "../assets/bruno-mascot.png"; // replace with your mascot
import bgImg from "../assets/pyhome.png"; // dark fantasy background

const PyCaster = () => {
  const [code, setCode] = useState(
`for i in range(0, 1):
    sum = sum + i`
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400">
            PyCaster
          </h1>
          <p className="text-white/80 mt-2">
            The Spellcasting Code Editor of PyLand
          </p>
        </div>

        {/* Challenge Text */}
        <p className="text-center max-w-3xl mx-auto mb-10 text-white/90">
          <span className="text-yellow-300 font-semibold">
            Challenge 1:
          </span>{" "}
          Shadow Minions keep multiplying inside the Logic Caves.
          Talo gives you a spell that can attack each minion.
        </p>

        {/* Editor + Mascot */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10">

          {/* Mascot */}
          <div className="relative w-48 flex-shrink-0">
            <img src={mascot} alt="PyKid Mascot" />

            {/* Speech Bubble */}
            <div className="absolute -top-6 left-20 bg-white text-black px-4 py-2
                            rounded-xl shadow-lg text-sm font-medium">
              Hi PyKid 👋
            </div>
          </div>

          {/* Code Editor */}
          <div className="w-full max-w-xl">
            <div className="rounded-2xl border-4 border-yellow-400
                            bg-[#1e1e1e] shadow-2xl p-6">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-48 bg-transparent text-white
                           font-mono text-sm resize-none
                           focus:outline-none"
                spellCheck="false"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button className="px-6 py-2 rounded-full bg-yellow-400 text-black
                                 font-semibold hover:scale-105 transition">
                Run
              </button>

              <button className="px-6 py-2 rounded-full bg-yellow-400 text-black
                                 font-semibold hover:scale-105 transition">
                Hint
              </button>

              <button className="px-6 py-2 rounded-full bg-yellow-400 text-black
                                 font-semibold hover:scale-105 transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PyCaster;
