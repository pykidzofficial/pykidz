import React, { useState } from "react";
import logo from "../assets/pylogo.png";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">

          {/* Logo */}
          <img src={logo} alt="PyKidz Logo" className="h-10 w-auto" />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 nav-text text-primarytext">
            {["Home", "Characters", "Adventures", "Learn", "FAQ"].map(
              (item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-primary transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>

          {/* CTA (Desktop) */}
          <button className="hidden md:block bg-primary text-secondarytext px-6 py-2 rounded-full btn-text hover:scale-105 transition">
            Start Learning
          </button>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden text-primarytext"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <img src={logo} alt="PyKidz Logo" className="h-8" />
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-white" />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col gap-6 px-6 py-10 text-white text-lg">
          {["Home", "Characters", "Adventures", "Learn", "FAQ"].map(
            (item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </li>
            )
          )}
        </ul>

        {/* Sidebar CTA */}
        <div className="px-6">
          <button className="w-full bg-primary text-secondarytext py-3 rounded-full btn-text hover:scale-105 transition">
            Start Learning
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
