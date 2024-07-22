import React from "react";

function AvailablePlans() {
  return (
    <div className="bg-orange-500 py-12 flex flex-col items-center px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 text-center text-white">
        Available Plans
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-sm md:max-w-md lg:max-w-lg text-center w-full">
        <button
          className="mt-4 px-4 py-2 md:px-6 md:py-3 bg-[#FFAC2D] text-lg md:text-xl font-bold rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 w-full max-w-xs md:max-w-sm lg:max-w-md active:scale-90 mb-4 md:mb-6"
          style={{ boxShadow: "1px 2px 0px black" }}
        >
          Basic
        </button>
        <ul className="text-left list-disc list-inside space-y-2 text-base md:text-lg font-medium text-gray-800">
          <li>30 social media reels/month</li>
          <li>Clip selection from videos/podcast</li>
          <li>Content calendar design</li>
          <li>1 content strategy call/month</li>
          <li>Content posting across social media</li>
          <li>Informative graphic design and posters</li>
        </ul>
      </div>
    </div>
  );
}

export default AvailablePlans;
