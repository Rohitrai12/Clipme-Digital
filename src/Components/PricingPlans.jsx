import React from "react";

function PricingPlans() {
  return (
    <>
      <div className="bg-[#D25525] py-10">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-8 text-center text-white">
          AVAILABLE PLANS
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="bg-white rounded-lg p-6  w-[352px] h-[316px] shadow-custom-orange">
            <button
              className="mt-4 ml-[36px] px-6 py-3 bg-[#FFAC2D] text-xl font-bold rounded-[18.5rem] shadow-lg hover:bg-orange-600 transition-all duration-300 w-[230px] active:scale-90 mb-[20px]"
              style={{ boxShadow: "1px 2px 0px black" }}
            >
              Basic
            </button>{" "}
            <div>
              <ul className="list-disc list-inside space-y-2">
                <li>10 social media reels/month</li>
                <li>Clip selection from keynote/podcasts</li>
                <li>Content calendar design</li>
                <li>1 content strategy call/month</li>
                <li>Content posting across social media</li>
                <li>Informative graphic design and posters</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 w-[352px] h-[316px] shadow-custom-orange">
            <button
              className="mt-4 px-6 py-3 ml-[36px] bg-[#FFAC2D] text-xl font-bold rounded-[18.5rem] shadow-lg hover:bg-orange-600 transition-all duration-300 w-[230px] active:scale-90 mb-[20px]"
              style={{ boxShadow: "1px 2px 0px black" }}
            >
              Silver
            </button>{" "}
            <div>
              <ul className="list-disc list-inside space-y-2">
                <li>20 social media reels/month</li>
                <li>Clip selection from keynote/podcasts</li>
                <li>Content calendar design</li>
                <li>1 content strategy call/month</li>
                <li>Content posting across social media</li>
                <li>Informative graphic design and posters</li>
              </ul>
            </div>
            
          </div>

          <div className="bg-white rounded-lg p-6  w-[352px] h-[316px] shadow-custom-orange">
            <button
              className="mt-4 px-6 py-3 ml-[36px] bg-[#FFAC2D] text-xl font-bold rounded-[18.5rem] shadow-lg hover:bg-orange-600 transition-all duration-300 w-[230px] active:scale-90 mb-[20px]"
              style={{ boxShadow: "1px 2px 0px black" }}
            >
              Gold
            </button>
            <div>
              <ul className="list-disc list-inside space-y-2">
                <li>30 social media reels/month</li>
                <li>Clip selection from keynote/podcasts</li>
                <li>Content calendar design</li>
                <li>1 content strategy call/month</li>
                <li>Content posting across social media</li>
                <li>Informative graphic design and posters</li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default PricingPlans;
