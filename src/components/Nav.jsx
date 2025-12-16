import React, { useState } from "react";
import logo from "../assets/pylogo.png";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Nav = ({ activePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Characters", path: "/characters" },
    { name: "Adventures", path: "/adventures" },
    { name: "Learn", path: "/learn" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">

          {/* Logo */}
          <img
            src={logo}
            alt="PyKidz Logo"
            className="h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 text-primarytext">
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`cursor-pointer transition
                  ${
                    activePage === item.name
                      ? "text-yellow-400 font-semibold"
                      : "hover:text-yellow-300"
                  }
                `}
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => navigate("/signup")}
            className="hidden md:block bg-yellow-400 text-black px-6 py-2
                       rounded-full font-semibold hover:scale-105 transition"
          >
            Start Learning
          </button>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <img src={logo} alt="PyKidz Logo" className="h-8" />
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-white" />
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-6 py-10 text-white text-lg">
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => {
                navigate(item.path);
                setIsOpen(false);
              }}
              className={`cursor-pointer
                ${
                  activePage === item.name
                    ? "text-yellow-400"
                    : "hover:text-yellow-300"
                }
              `}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="px-6">
          <button
            onClick={() => {
              navigate("/signup");
              setIsOpen(false);
            }}
            className="w-full bg-yellow-400 text-black py-3 rounded-full
                       font-semibold hover:scale-105 transition"
          >
            Start Learning
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
