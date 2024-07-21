import React from 'react';

function ServicesSection() {
  return (
    <div>
      {/* Our Services Section */}
      <div className="bg-orange-500 py-12 flex flex-col items-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center" style={{ boxShadow: "10px 10px 0px #333" }}>
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <ul className="text-left list-disc list-inside space-y-2 text-lg">
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
        <div className='flex gap-[48px]'>
        <div className="text-center mb-6">
          <p className="text-[35px] font-bold mt-[24px]">Contact us now:</p>
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
      <div className="bg-white pb-12 flex flex-col items-center">
        <div className="text-center space-y-2">
          <p className="text-xl">clipme.digital@gmail.com</p>
          <p className="text-xl">+977-9813999366</p>
          <p className="flex justify-center items-center space-x-2 text-xl">
            <img src="/path/to/instagram_icon.png" alt="Instagram" className="w-6 h-6" />
            <span>Clipme.digital</span>
          </p>
          <p className="text-xl">Lalitpur, Nepal</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
