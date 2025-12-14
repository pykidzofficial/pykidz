import React from "react";

export default function ContactForm() {
  return (
    <section className="w-full py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>

      <div className="max-w-3xl mx-auto bg-gray-100 p-10 rounded-3xl shadow-lg">
        <form className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-lg font-semibold mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-semibold mb-2">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-lg font-semibold mb-2">Subject</label>
            <input
              type="text"
              placeholder="Why are you contacting us?"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg font-semibold mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl text-xl font-bold hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}
