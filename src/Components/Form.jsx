import React from "react";

function Form() {
  return (
    <div className="bg-orange-500 py-12 flex flex-col items-center px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 text-center text-white">
        Contact Us
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-sm md:max-w-md lg:max-w-lg w-full">
        <form className="space-y-6" action="https://formspree.io/f/xjkbydzr" method="post">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 block w-full rounded-md border shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 block w-full rounded-md border shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
              placeholder="Your email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 block w-full rounded-md border shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#FFAC2D] text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 active:scale-90"
            style={{ boxShadow: "1px 2px 0px black" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
