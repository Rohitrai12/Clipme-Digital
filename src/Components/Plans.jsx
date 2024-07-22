import React from "react";

function Plans() {
  return (
    <>
      <div className="bg-[#D25525] py-10">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-8 text-center text-white">
          Available Plans
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="bg-white rounded-lg p-6  w-[352px] h-[316px] shadow-custom-orange">
            <h1 className="text-xl font-bold text-center mb-4">BASIC</h1>
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
            <h1 className="text-xl font-bold text-center mb-4">SILVER</h1>
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
            <h1 className="text-xl font-bold text-center mb-4">GOLD</h1>
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

export default Plans;
