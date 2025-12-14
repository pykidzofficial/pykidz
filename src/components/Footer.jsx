import { motion } from "framer-motion";
import logo from '../assets/pylogo.png';

export default function Footer() {
  return (
     <footer className="relative w-full min-h-screen bg-[url('/pygate.png')] bg-cover bg-center bg-no-repeat py-24">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-3"
        >
          Start Your <span className="text-yellow-400">PyLand Journey</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm md:text-base text-gray-300 mb-6"
        >
          No coding experience needed. Just curiosity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300"
          >
            Begin Your Journey Now
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl mx-auto text-xs md:text-sm text-gray-400 leading-relaxed"
        >
          Ready to start exploring? Here’s everything you need to know — your first steps,
          how to travel, how to complete quests, and how to become a true explorer of PyLand.
        </motion.p>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-white/10 py-6 text-center">
        <img
          src={logo}
          alt="PyKidz Logo"
          className="mx-auto h-10 w-auto"
        />
        <p className="text-xs text-gray-400 mt-1">
          ©2025 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
