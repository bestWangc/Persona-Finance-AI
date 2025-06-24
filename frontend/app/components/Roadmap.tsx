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

const roadmapData: RoadmapItem[] = [
  {
    phase: 'Part 1',
    title: 'Proof of Concept Complete',
    description: 'Completed smart contract architecture design for core protocol and on-chain behavioral data analysis model construction, successfully validating the feasibility of trading personality minting and initial evolution.',
    features: [
      'ERC-6551 Base Protocol Implementation',
      'Trading Gene Mutation Algorithm Verification',
      'Whitepaper V1 Release'
    ],
    completed: true,
    icon: 'fas fa-check',
    position: 'left'
  },
  {
    phase: 'Part 2',
    title: '测试网启动',
    description: '在以太坊Goerli测试网和Polygon Mumbai测试网部署PFAI协议，开放早期社区用户测试。',
    features: [
      '人格铸造器V1发布',
      '10,000+个初始人格NFT铸造',
      '完成第一轮融资'
    ],
    completed: false,
    icon: 'fas fa-rocket',
    position: 'right'
  },
  {
    phase: 'Part 3',
    title: '主网V1上线',
    description: 'PFAI主网在以太坊、Polygon主网上线，全面开放交易人格铸造、基因突变与基础租赁功能。',
    features: [
      '交易人格进化引擎上线',
      '基因交易市场Alpha版',
      'API开放使用'
    ],
    completed: false,
    icon: 'fas fa-dna',
    position: 'left'
  },
  {
    phase: 'Part 4',
    title: '社交金融生态扩展',
    description: '实现跨链策略基因表达，推出治理代币PFAI，构建完整的去中心化交易人格生态系统。',
    features: [
      '人格繁殖池上线',
      '策略基因跨链协议实现',
      'DAO治理系统启动'
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
