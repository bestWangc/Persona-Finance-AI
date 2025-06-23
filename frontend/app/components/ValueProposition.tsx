'use client';

import React from 'react';
import RiskRadarChart from './RiskRadarChart';
import EvolutionBar from './EvolutionBar';

const ValueProposition = () => {
  return (
    <section className="py-16">
      <h2 className="text-center  my-16 text-white bg-clip-text text-transparent text-4xl font-bold">Next-Gen Trading Protocol Evolution</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-[5%] pb-16 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2.5 hover:border-[#00c7ff] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-gradient-to-r before:from-neon-purple before:to-neon-green text-white border border-[rgba(0,199,255,0.2)]" style={{ backgroundColor: 'rgba(0, 15, 34, 0.7)' }}>
          <div className="h-[200px] rounded-2xl mb-4 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0, 15, 40, 0.7)' }}>
            <RiskRadarChart />
          </div>
          <h3 className="text-2xl my-4">Personality Minting​</h3>
          <p className="text-gray-400 mb-6">​​On-Chain Behavior + User Preference-Based Initial Trading Persona Creation​</p>
          <ul className="list-none mt-6">
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              ​​Historical Trade Modeling
            </li>
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              ​Trade Risk Preference Analysis
            </li>
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              Protocol Weight Analysis Initialization​
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl p-8 border border-[rgba(0,199,255,0.2)] relative overflow-hidden transition-all duration-300 hover:-translate-y-2.5 hover:border-[#00c7ff] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-gradient-to-r before:from-neon-purple before:to-neon-green text-white" style={{ backgroundColor: 'rgba(0, 15, 34, 0.7)' }}>
          <div className="h-[100px] rounded-2xl flex items-center justify-center font-mono text-neon-blue tracking-wider text-xl mb-4 relative overflow-hidden text-[#00c7ff]" style={{ backgroundColor: 'rgba(0, 20, 40, 0.7)' }}>
            ATGC<span className="text-[#00ff9d] animate-blink">G</span>AA...T<span className="animate-blink">→</span>ATCGCAA...
          </div>
          <h3 className="text-2xl my-4">​​Behavior Evolution Engine</h3>
          <p className="text-gray-400 mb-6">Every trade mutates the gene sequence.​</p>
          <EvolutionBar
            level={6}
            currentXP={7800}
            maxXP={10000}
            className="mt-4"
          />
          <ul className="list-none mt-6">
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              ​​Market-Adaptive Evolution
            </li>
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              Context-Aware Strategy Mutation​
            </li>
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              Protocol Composability Evolution
            </li>
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              Cross-Chain Strategy Gene Expression​
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl p-8 border border-[rgba(0,199,255,0.2)] relative overflow-hidden transition-all duration-300 hover:-translate-y-2.5 hover:border-[#00c7ff] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-gradient-to-r before:from-neon-purple before:to-neon-green text-white" style={{ backgroundColor: 'rgba(0, 15, 34, 0.7)' }}>
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            <span className="px-4 py-2 rounded-[20px] text-sm font-semibold bg-gradient-to-r from-neon-purple to-purple-600">
              ​Lease Yield​
            </span>
            <span className="px-4 py-2 rounded-[20px] text-sm font-semibold bg-gradient-to-r from-neon-green to-green-600">
              DNA Trading
            </span>
            <span className="px-4 py-2 rounded-[20px] text-sm font-semibold bg-gradient-to-r from-neon-blue to-blue-600">
              Governance Token
            </span>
          </div>
          <h3 className="text-2xl my-4">​​SocialFi</h3>
          <p className="text-gray-400 mb-6">Full-Value Ecosystem Capture</p>
          <div className="bg-neon-blue/10 border border-neon-blue px-6 py-3 rounded-lg text-neon-blue font-mono text-center mt-4">
            Top Personality APY Distribution​: <strong className="text-neon-green">1:3:6</strong>
          </div>
          <ul className="list-none mt-6">
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              DePersona Lease & Trade​
            </li>
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              ​​Influence Token Mining
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
