import React from "react";

function AvailablePlans() {
  return (
    <div className="bg-orange-500 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-white">
        Available Plans
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center w-full md:w-[455px]  w-[653px">
        <button
          className="mt-4 px-6 py-3 bg-[#FFAC2D] text-xl font-bold rounded-[18.5rem] shadow-lg hover:bg-orange-600 transition-all duration-300 w-[230px] active:scale-90 mb-[20px]"
          style={{ boxShadow: "1px 2px 0px black" }}
        >
         Basic
        </button>
        <ul className="text-left list-disc list-inside space-y-2 text-lg font-medium text-gray-800">
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
