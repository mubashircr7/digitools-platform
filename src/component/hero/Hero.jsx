import React from "react";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-10 md:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="lg:w-1/2 text-left">
          <div className="bg-[#EBE3FF] text-[#8035FF] text-[12px] font-semibold px-4 py-1 rounded-full inline-block mb-6">
            ● Now: AI-Powered Tools Available
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#2D3139] leading-tight mb-6">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-lg">
            Access premium AI tools, design assets, and productivity software—all in one place.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#8035FF] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">Explore Products</button>
            <button className="border border-gray-200 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-50 transition">
              <FaPlay className="text-xs text-[#8035FF]" /> Watch Demo
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src="https://img.freepik.com/free-vector/creative-team-working-project_23-2148820150.jpg" alt="Hero" className="w-full rounded-2xl shadow-lg" />
        </div>
      </div>
    </section> 
  );
};

export default Hero;