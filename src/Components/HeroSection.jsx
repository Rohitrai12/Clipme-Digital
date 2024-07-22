import React from "react";
import HomeHero from "../assets/homeHero.webp";

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto p-4 space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-black">
            We Upscale your social media content with no effort from you.
          </p>
          <button
            className="mt-4 px-6 py-3 bg-orange-500 text-white text-xl font-bold rounded-[18.5rem] shadow-lg hover:bg-orange-600 transition-all duration-300 w-[230px] active:scale-90"
            style={{ boxShadow: "1px 2px 0px black" }}
          >
            Book a Call
          </button>
        </div>
        <div className="flex-1 w-full">
          <img
            src={HomeHero}
            alt="heroImg"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
