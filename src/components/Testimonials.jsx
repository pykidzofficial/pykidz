import React from "react";

const testimonials = [
  {
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=256&q=80", // man smiling
    title: "Parent of Class 6 Student",
    text: `“PyKidz made my daughter fall in love with coding. The stories and characters kept her excited every day!”`,
    author: "-Aarya.R",
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80", // young boy portrait
    title: "Class 7 Student",
    text: `“Learning Python feels like playing an adventure game! I never get bored during the quests.”`,
    author: "-Sohan.S",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80", // woman portrait
    title: "Parent of Class 8 Student",
    text: `“As a parent, I'm impressed by how PyKidz simplifies concepts. My son actually looks forward to coding time!”`,
    author: "-Meera Patel",
  },
  {
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=256&q=80", // repeated man
    title: "Parent of Class 6 Student",
    text: `“PyKidz made my daughter fall in love with coding. The stories and characters kept her excited every day!”`,
    author: "-Aarya.R",
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80", // repeated boy
    title: "Class 7 Student",
    text: `“Learning Python feels like playing an adventure game! I never get bored during the quests.”`,
    author: "-Sohan.S",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80", // repeated woman
    title: "Parent of Class 8 Student",
    text: `“As a parent, I'm impressed by how PyKidz simplifies concepts. My son actually looks forward to coding time!”`,
    author: "-Meera Patel",
  },
];

const Testimonials = () => {
  return (
    <section className="relative w-full min-h-screen bg-[url('/pygate.png')] bg-cover bg-center bg-no-repeat py-20">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-primarytext">
          What they <span className="text-primary">Say?</span>
        </h2>
        <p className="text-primarytext/90 mt-4 mb-16 max-w-2xl mx-auto">
          Real feedback from parents and students who love learning in PyLand.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col items-center px-4">
              <div className="w-28 h-28 mb-6 rounded-full border-2 border-yellow-400 overflow-hidden shadow-lg">
                <img
                  src={t.img}
                  alt={t.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{t.title}</h3>
              <p className="text-yellow-400 italic text-center max-w-xs">{t.text}</p>
              <p className="text-yellow-400 font-bold mt-4">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
