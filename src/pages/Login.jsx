import React from "react";
import heroImg from "../assets/pyhome.png";
import logo from "../assets/pylogo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Login Card */}
      <div
        className="relative z-10 w-full max-w-xl bg-[#FFFBF3]
                   rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.7)]
                   px-8 py-10 md:px-12 md:py-12 text-center text-secondarytext"
      >
        {/* Logo */}
        <img
          src={logo}
          alt="PyKidz"
          className="h-10 mx-auto mb-6"
        />

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Welcome Back, Explorer!
        </h1>

        <p className="text-gray-600 mt-2">
          Continue your coding adventure
        </p>

        {/* Form */}
        <form className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-5 py-3 rounded-full border
                       focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            placeholder="Parent Password"
            className="w-full px-5 py-3 rounded-full border
                       focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* CTA */}
          <button
            type="submit" onClick={() => navigate("/adventures")}
            className="w-full mt-4 py-3 rounded-full text-white font-semibold
                       bg-gradient-to-r from-green-400 to-green-600
                       hover:scale-105 transition shadow-lg"
          >
            Let’s Start Coding
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-sm text-gray-600 mt-4">
                   <span
            onClick={() => navigate("/signup")}
            className="text-blue-600 cursor-pointer hover:underline font-medium"
          >
             Don’t have an account? Signup
          </span>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Social Login */}
        <div className="flex flex-col md:flex-row gap-4">
          <button
            className="flex items-center justify-center gap-3 w-full text-gray-800
                       py-3 border-2 border-blue-600 rounded-full
                       hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5"
            />
            Continue with Google
          </button>

          <button
            className="flex items-center justify-center gap-3 w-full text-gray-800
                       py-3 border-2 border-blue-600 rounded-full
                       hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              alt="Facebook"
              className="h-5"
            />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
