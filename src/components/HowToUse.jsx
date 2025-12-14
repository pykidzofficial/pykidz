import React from "react";

const steps = [
  {
    id: 1,
    title: "Step 1 — Click on Start Learning",
    description: "Begin your journey into PyLand by clicking the Start Learning button on the homepage.",
    img: "https://images.unsplash.com/photo-1559163499-3423dc5a1f9b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Step 2 — Get Registered",
    description: "Create your free PyKidz account so your progress is saved forever.",
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Step 3 — Login to Your Account",
    description: "Use your email & password to enter your personalized learning dashboard.",
    img: "https://images.unsplash.com/photo-1584697964154-7c24b16e7c4d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "Step 4 — Start the Adventure",
    description: "Jump into Level 1 on Syntax Shore and begin your magical journey in PyLand.",
    img: "https://images.unsplash.com/photo-1545231027-637d2f6210f0?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function HowToUsePyKidz() {
  return (
    <section className="w-full py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">How to Use PyKidz</h2>

      <div className="w-full overflow-x-auto flex snap-x snap-mandatory scrollbar-hide">
        {steps.map(step => (
          <div
            key={step.id}
            className="min-w-full snap-center flex flex-col items-center px-6"
          >
            <div className="w-full max-w-4xl bg-gray-100 rounded-3xl shadow-lg p-6">
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-80 object-cover rounded-2xl mb-6"
              />
              <h3 className="text-3xl font-extrabold mb-2">{step.title}</h3>
              <p className="text-lg text-gray-700">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
