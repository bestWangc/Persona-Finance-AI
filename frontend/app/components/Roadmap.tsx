'use client';

import React from 'react';

interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  features: string[];
  completed: boolean;
  icon: string;
  position: 'left' | 'right';
}

// icon: 'fas fa-check',
const roadmapData: RoadmapItem[] = [
  {
    phase: 'Part 1',
    title: 'Proof of concept completed',
    description: 'Completed the smart contract architecture design of the core protocol and the construction of the on-chain behavior data analysis model, and successfully verified the feasibility of transaction personality casting and initial evolution.',
    features: [
      'ERC-6551 Smart Contract',
      'Evolutionary Algorithm Verification',
      'Basic evolution completed',
      'White Paper Release'
    ],
    completed: false,
    icon: 'fas fa-rocket',
    position: 'left'
  },
  {
    phase: 'Part 2',
    title: 'Testnet launch',
    description: 'Deploy the PFAI protocol and open it to early community user testing.',
    features: [
      'Personality Forger V1 released',
      '10,000+ initial personality NFT minting',
      'Verify the results'
    ],
    completed: false,
    icon: 'fas fa-dna',
    position: 'right'
  },
  {
    phase: 'Part 3',
    title: 'Mainnet V1 is launched',
    description: 'The PFAI mainnet is launched on the Ethereum, Polygon, and BSC mainnets, fully opening up trading personality casting, personality evolution, and basic leasing functions.',
    features: [
      'Evolvable Personality AI Agent Released',
      'Alpha version of the trading market',
      'API open'
    ],
    completed: false,
    icon: 'fas fa-dna',
    position: 'left'
  },
  {
    phase: 'Part 4',
    title: 'Social finance ecosystem expansion',
    description: 'Implement cross-chain strategy, launch governance token PFAI, and build a complete decentralized trading personality ecosystem.',
    features: [
      'SocialFi release',
      'Strategy cross-chain implementation',
      'DAO governance system launched'
    ],
    completed: false,
    icon: 'fas fa-dna',
    position: 'right'
  }
];

const Roadmap = () => {
  return (
    <section className="py-16 px-[5%]" style={{ backgroundColor: 'rgba(0, 15, 34, 0.6)' }}>
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl mb-6 bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
          Roadmap
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* 时间线中心线 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-purple via-neon-blue to-neon-green"></div>

        <div className="space-y-12">
          {roadmapData.map((item, index) => (
            <div key={index} className={`flex items-center ${item.position === 'right' ? 'flex-row-reverse' : ''}`}>
              {/* 内容卡片 */}
              <div className={`w-5/12 ${item.position === 'right' ? 'pl-8' : 'pr-8'}`}>
                <div className="rounded-2xl p-6 border border-neon-blue/30 relative overflow-hidden transition-all duration-300 hover:border-neon-blue text-white" style={{ backgroundColor: 'rgba(0, 15, 34, 0.8)', backdropFilter: 'blur(10px)' }}>
                  {/* 阶段标签 */}
                  <div className={`absolute top-4 ${item.position === 'right' ? 'left-4' : 'right-4'} px-3 py-1 rounded-full text-xs font-mono border ${item.completed ? 'bg-neon-green/20 text-neon-green border-neon-green/30' : 'bg-neon-blue/20 text-neon-blue border-neon-blue/30'}`}>
                    {item.phase}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                    <p className="text-text-gray text-sm mb-4 leading-relaxed">{item.description}</p>

                    <ul className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 中心徽章 */}
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${item.completed
                  ? 'bg-neon-green border-neon-green shadow-lg shadow-neon-green/30'
                  : 'bg-neon-blue border-neon-blue shadow-lg shadow-neon-blue/30'
                  }`} style={{ backgroundColor: item.completed ? '#00ff9d' : '#00c7ff' }}>
                  <i className={`${item.icon} text-xl text-white`}></i>
                </div>
              </div>

              {/* 占位空间 */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
