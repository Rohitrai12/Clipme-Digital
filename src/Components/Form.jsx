import React from "react";
import Image1 from '../assets/SecHero.webp'; // Update the path accordingly

function Form() {
    return (
        <div className="bg-orange-500 py-12 px-4 md:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 text-center text-white">
                Contact Us
            </h1>
            <div className="flex flex-col lg:flex-row lg:items-start w-full lg:w-auto gap-[161px]">
                <div className="lg:w-3/4 w-full flex justify-center lg:justify-end">
                    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-xl lg:max-w-2xl ml-[41px]">
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
                <div className="lg:w-1/2 w-full mt-8 lg:mt-0 lg:ml-8 flex justify-center">
                    <img src={Image1} alt="Contact Us" className="rounded-lg w-full max-[52rem]" />
                </div>
            </div>
        </div>
    );
}

export default Form;
