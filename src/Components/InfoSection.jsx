import React from 'react';
import Image1 from '../assets/SecHero.webp'; // Update the path accordingly
import Image2 from '../assets/SecHeroPart.webp'; // Update the path accordingly
import Arow1 from '../assets/Arow1.webp'; // Added Arrow Img
import Arow2 from '../assets/arrow2.webp'; // Added Arrow Img

function InfoSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 relative">
          <div className="flex-1 text-center lg:text-left space-y-4">
            <h2 className="text-4xl md:text-6xl mb-4 text-black font-bold">
              What Do We Do ?
            </h2>
            <img src={Arow2} alt="Arrow 2" className="absolute hidden lg:block right-0 transform-translate-y-1/2 translate-x-full  top-[148px] left-[169px] rotate-[400deg] -z-0 w-[224px] " />
            <p className="text-xl md:text-2xl font-semibold">
              We will help you stand out in the digital world and captivate your audience with professionally crafted content.
            </p>
            <img src={Arow1} alt="Arrow 2" className="absolute hidden lg:block right-0 transform-translate-y-1/2   top-[234px] left-[110px] rotate-[-597deg] w-[383px] " />

          </div>
          <div className="flex-1">
            <img src={Image1} alt="Person at desk" className="w-full h-auto rounded-lg object-cover mx-auto lg:mx-0" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 relative">
          <div className="flex-1 order-2 lg:order-1">
            <img src={Image2} alt="Illustration" className="w-full h-auto rounded-lg object-cover mx-auto lg:mx-0" />
          </div>
          <div className="flex-1 order-1 lg:order-2 text-center lg:text-left space-y-4 my-[242px] gap-6">
            <h2 className="text-4xl md:text-6xl mb-4 text-black font-bold">
              Why Choose Us?
            </h2>
            <p className="text-xl md:text-2xl font-semibold">
              At Clipme Digital, we create stunning graphics and videos that elevate your brand and drive engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
