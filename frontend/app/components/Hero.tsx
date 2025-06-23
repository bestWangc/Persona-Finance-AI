'use client';

import React from 'react';
import TypeWriterText from './TypeWriterText';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-[5%] py-16 min-h-[85vh] relative gap-12">
      <div className="flex-1 lg:max-w-[45%] text-center lg:text-left">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight font-bold">TRADE LIKE <span className="gradient-text">YOUR FUTURE SELF</span></h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-[#FCDB17] font-bold">
          <TypeWriterText />
        </h1>
        <p className="text-lg md:text-xl text-text-gray mb-10 max-w-[90%] mx-auto lg:mx-0 text-gray-400">
          On-Chain Behavioral Evolution Transaction Personality Protocol • The First Evolvable DeFi Trading Entity
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
          <button className="bg-gradient-to-r from-[#bd00ff] to-[#8c00ff] border-none px-8 py-4 rounded-xl text-white font-semibold text-lg cursor-pointer flex items-center gap-2.5  duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(189,0,255,0.5)] justify-center">
            <i className="fas fa-plus"></i> Mint Initial Personality
          </button>
          <button className="bg-transparent border-2 border-[#00c7ff] px-8 py-4 rounded-xl text-[#00c7ff] font-semibold text-lg cursor-pointer flex items-center gap-2.5 transition-all duration-300 hover:bg-neon-blue/10 justify-center">
            探索策略基因库 <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="flex-1 lg:max-w-[45%] w-full rounded-[20px] p-8 border-[rgba(0, 199, 255, 0.3)] shadow-[0_0_40px_rgba(0,199,255,0.2)]  h-[400px] md:h-[500px] relative overflow-hidden" style={{ backgroundColor: 'rgba(0, 30, 60, 0.6)' }}>
        <div className="h-full rounded-xl border border-[rgba(0,199,255,0.2)] relative flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'rgba(0, 10, 30, 0.8)' }}>
          <div className="w-full h-full flex flex-col items-center justify-center gap-6">
            <div className="w-[120px] h-[120px] bg-gradient-to-r from-[#bd00ff] to-[#00c7ff] rounded-full flex items-center justify-center text-5xl animate-pulse">
              <i className="fas fa-dna"></i>
            </div>
            <h3 className="text-xl font-semibold text-white">Agent #4215</h3>
            <p className="text-text-gray text-white">APEX TRADER Rank 1</p>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
          <div className="bg-[rgba(0,199,255,0.1)] px-6 py-2 rounded-[30px] border-[#00c7ff] font-mono text-sm border border-neon-blue text-[#00c7ff]">
            DNA: [0x3A...BEF2]
          </div>
          <div className="bg-gradient-to-r from-[#00ff9d] to-[#008a5e]  px-6 py-2 rounded-[30px] text-text-light font-semibold font-mono text-white">
            +37% APY
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
