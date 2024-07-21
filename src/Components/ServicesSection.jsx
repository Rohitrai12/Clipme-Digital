import React from "react";

function ServicesSection() {
  return (
    <div>
      {/* Our Services Section */}
      <div className="bg-orange-500 py-12 flex flex-col items-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center w-[402px]">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <ul className="text-left list-disc list-inside space-y-2 text-lg font-medium">
            <li>Social Media Management</li>
            <li>Social Media Marketing</li>
            <li>Content Calendar Design</li>
            <li>Graphic Designing</li>
            <li>Professional Video Editing</li>
            <li>Portfolio Website Design</li>
            <li>Personal Branding</li>
          </ul>
        </div>
      </div>

      {/* Ready to elevate your Brand Section */}
      <div className="bg-white py-12 flex flex-col items-center">
        <h2 className="text-6xl font-extrabold mb-6 text-black">
          Ready to elevate your Brand?
        </h2>
        <div className="flex gap-[48px] items-center">
          <div className="text-center mb-6">
            <p className="text-[35px] font-bold mt-[24px] text-[#000000d6]">
              Contact us now:
            </p>
          </div>
          <button
            className="mt-4 px-6 py-3 bg-orange-500 text-white text-xl font-bold rounded-[18.5rem] shadow-lg hover:bg-orange-600 transition-all duration-300 w-[230px] active:scale-90"
            style={{ boxShadow: "1px 2px 0px black" }}
          >
            schedule a meeting
          </button>
        </div>
      </div>

      {/* Contact Details */}
      <div className="bg-white pb-12 flex items-center justify-between px-[172px] font-medium">
        <div className="flex items-center justify-between gap-6 flex-col">
            <p>clipme.digital@gmail.com</p>
            <p>Clipme.digital</p>
        </div>
        <div className="flex items-center justify-between gap-6 flex-col">
            <p>+977-9813999366</p>
            <p>Lalitpur, Nepal </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
