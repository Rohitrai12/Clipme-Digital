import React from "react";
import EnvisionImg from "../assets/Thirdthird.png"; // Update with correct path
import CraftImg from "../assets/SecThird.webp"; // Update with correct path
import ElevateImg from "../assets/FirstThird.png"; // Update with correct path
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";

function ElevateBrandSection() {
  return (
    <div className="bg-white py-12 flex flex-col items-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center text-black">
        "Ready to elevate your brand?"
      </h2>
      <div className="flex flex-col md:flex-row justify-around items-center w-full mb-12">
        <div className="flex flex-col items-center space-y-4">
          <img src={EnvisionImg} alt="Envision" className="w-16 h-16" />
          <p className="text-2xl font-bold">Envision</p>
        </div>
        <div className="hidden md:block text-2xl font-bold">→</div>
        <div className="flex flex-col items-center space-y-4">
          <img src={CraftImg} alt="Craft" className="w-16 h-16" />
          <p className="text-2xl font-bold">Craft</p>
        </div>
        <div className="hidden md:block text-2xl font-bold">→</div>
        <div className="flex flex-col items-center space-y-4">
          <img src={ElevateImg} alt="Elevate" className="w-16 h-16" />
          <p className="text-2xl font-bold">Elevate</p>
        </div>
      </div>
      <p className="text-2xl font-bold mb-6">Contact us now</p>
      <div className="flex flex-col md:flex-row justify-around items-center w-full space-y-4 md:space-y-0 md:space-x-12">
        <div className="flex items-center space-x-2">
          <CiInstagram />
          <p className="text-xl">Clipme.digital</p>
        </div>
        <div className="text-center space-y-2">
          <p className="text-xl">clipme.digital@gmail.com</p>
          <p className="text-xl">hello@clipme.digital</p>
        </div>
        <p className="text-xl text-center md:text-left">Lalitpur, Nepal</p>
      </div>
    </div>
  );
}

export default ElevateBrandSection;
