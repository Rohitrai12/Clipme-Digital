import React from "react";
import JamieImg from "../assets/oneStic.webp"; // Update with the correct path
import RyanImg from "../assets/TwoStic.jpg"; // Update with the correct path
import AnthonyImg from "../assets/thirdStic.jpg"; // Update with the correct path
import { AiFillStar } from "react-icons/ai"; // Import star icon for rating
import tillarrow from "../assets/tillarrow.webp"; // Import the arrow image

function SatisfiedClients() {
  return (
    <div className="py-12 flex flex-col items-center bg-white">
      <h1 className="text-2xl md:text-4xl font-extrabold mb-8 text-center text-gray-900">
        Satisfied Clients
      </h1>
      <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-5xl relative">
        <div className="flex flex-col items-center space-y-4 w-full md:w-60 mb-8 md:mb-0">
          <img
            src={JamieImg}
            alt="Jamie Folsom"
            className="w-32 h-32 object-cover rounded-lg shadow-md"
          />
          <h3 className="text-xl md:text-3xl font-semibold text-gray-800">Jamie Folsom</h3>
          <p className="text-center text-gray-600 px-4 md:px-0">
            Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.
          </p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} className="text-orange-500 text-xl md:text-2xl" />
            ))}
          </div>
        </div>
        <img src={tillarrow} alt="arrow" className="hidden md:block w-16 md:w-[130px] rotate-[-149deg] mt-[-108px] ml-[18px]" />
        <div className="flex flex-col items-center space-y-4 w-full md:w-60 mb-8 md:mb-0">
          <img
            src={RyanImg}
            alt="Ryan Hughes"
            className="w-32 h-32 object-cover rounded-lg shadow-md"
          />
          <h3 className="text-xl md:text-3xl font-semibold text-gray-800">Ryan Hughes</h3>
          <p className="text-center text-gray-600 px-4 md:px-0">
            Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.
          </p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} className="text-orange-500 text-xl md:text-2xl" />
            ))}
          </div>
        </div>
        <img src={tillarrow} alt="arrow" className="hidden md:block w-16 md:w-[130px] rotate-[-149deg] mt-[-108px] ml-[18px]" />
        <div className="flex flex-col items-center space-y-4 w-full md:w-60">
          <img
            src={AnthonyImg}
            alt="Anthony Garrett"
            className="w-32 h-32 object-cover rounded-lg shadow-md"
          />
          <h3 className="text-xl md:text-3xl font-semibold text-gray-800">
            Anthony Garrett
          </h3>
          <p className="text-center text-gray-600 px-4 md:px-0">
            Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.
          </p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} className="text-orange-500 text-xl md:text-2xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SatisfiedClients;
