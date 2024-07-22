import React from "react";
import EnvisionImg from "../assets/Thirdthird.png"; // Update with correct path
import CraftImg from "../assets/SecThird.webp"; // Update with correct path
import ElevateImg from "../assets/ff.png"; // Update with correct path
import arrowrigh from "../assets/arrowrigh.png"; // Update with correct path
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";

function ElevateBrandSection() {
  return (
    <div className="py-12 flex flex-col items-center px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 text-center text-gray-900">
        Ready to elevate your brand?
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-full mb-12 space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center space-y-4">
          <img src={EnvisionImg} alt="Envision" className="w-20 h-20 md:w-24 md:h-24" />
          <p className="text-lg md:text-xl font-semibold text-gray-700">Envision</p>
        </div>
        <div className="hidden md:flex items-center space-x-4 text-2xl font-bold text-gray-700">
          <img src={arrowrigh} alt="" className="rotate-90 w-[50px] md:w-[75px]" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img src={CraftImg} alt="Craft" className="w-20 h-20 md:w-24 md:h-24" />
          <p className="text-lg md:text-xl font-semibold text-gray-700">Craft</p>
        </div>
        <div className="hidden md:flex items-center space-x-4 text-2xl font-bold text-gray-700">
          <img src={arrowrigh} alt="" className="rotate-90 w-[50px] md:w-[75px]" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img src={ElevateImg} alt="Elevate" className="w-20 h-20 md:w-24 md:h-24" />
          <p className="text-lg md:text-xl font-semibold text-gray-700">Elevate</p>
        </div>
      </div>
      <p className="text-lg md:text-xl font-semibold mb-6 text-gray-800">
        Contact us now
      </p>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full space-y-4 md:space-y-0 md:space-x-12">
        <div className="flex items-center space-x-3 text-2xl md:text-3xl text-gray-800">
          <CiInstagram />
          <FaFacebookF />
          <p className="text-lg md:text-xl font-semibold text-gray-700">Clipme.digital</p>
        </div>
        <div className="text-center space-y-2">
          <p className="text-lg md:text-xl font-semibold text-gray-700">
            clipme.digital@gmail.com
          </p>
          <p className="text-lg md:text-xl font-semibold text-gray-700">
            hello@clipme.digital
          </p>
        </div>
        <p className="text-lg md:text-xl font-semibold text-gray-700 text-center md:text-left">
          Lalitpur, Nepal
        </p>
      </div>
    </div>
  );
}

export default ElevateBrandSection;
