import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import mascot from "../assets/bruno-mascot.png";
import bgImg from "../assets/pyhome.png";

const PyCaster = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();

  const [code, setCode] = useState(
`for i in range(0, 1):
    sum = sum + i`
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white overflow-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Dark Overlay */}
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

        {/* CHALLENGE TEXT */}
        <p className="text-center max-w-3xl mx-auto mb-10 text-white/90">
          <span className="text-yellow-300 font-semibold">
            Challenge 1:
          </span>{" "}
          Shadow Minions keep multiplying inside the Logic Caves.
        </p>

        {/* CODE EDITOR */}
        <div className="flex justify-center">
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

            {/* BUTTONS */}
            <div className="flex justify-center gap-4 mt-6">
              <button className="px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition">
                Run
              </button>

              <button className="px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition">
                Hint
              </button>

              <button
                onClick={() => navigate("/reward")}
                className="px-6 py-2 rounded-full bg-yellow-400 text-black
                           font-semibold hover:scale-105 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🧙‍♂️ MASCOT — FIXED BOTTOM LEFT */}
      <div className="fixed bottom-6 left-6 z-20 flex items-end gap-3">
        <img
          src={mascot}
          alt="PyKid Mascot"
          className="w-28 md:w-36 drop-shadow-2xl"
        />

        {/* SPEECH BUBBLE */}
        <div className="bg-white text-black px-4 py-2 rounded-xl
                        shadow-lg text-sm font-medium max-w-[180px]">
          You got this, PyKid! ✨
        </div>
      </div>

    </div>
  );
};

export default PyCaster;
