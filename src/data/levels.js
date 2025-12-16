import syntaxShoresBg from "../assets/syntax-shores.png";

/* STORY SLIDES – LEVEL 1 */
import story1 from "../assets/story/level1/slide1.png";
import story2 from "../assets/story/level1/slide2.jpg";
import story3 from "../assets/story/level1/slide3.jpg";
import story4 from "../assets/story/level1/slide4.jpg";
import story5 from "../assets/story/level1/slide5.jpg";
import story6 from "../assets/story/level1/slide6.jpg";
import story7 from "../assets/story/level1/slide7.jpg";
import story8 from "../assets/story/level1/slide8.jpg";
import story9 from "../assets/story/level1/slide9.jpg";
import story10 from "../assets/story/level1/slide10.jpg";

export const levels = {
  1: {
    level: 1,
    title: "Syntax Shores",
    guardian: "Aira — The Golden Eagle Queen",
    stars: 16,
    coins: 60,
    chapter: "Birth Of Pyland",

    description: `
      Welcome to Syntax Shores.
      Here, young coders learn the ancient rules of Python spells.
      Every command must be written correctly to move forward.
    `,

    /* Background Image */
    bgImage: syntaxShoresBg,

    /* STORY MODE (10 SLIDES) */
    storySlides: [
      story1,
      story2,
      story3,
      story4,
      story5,
      story6,
      story7,
      story8,
      story9,
      story10,
    ],
  },

  // 🔒 Future levels
  // 2: { ... }
};
