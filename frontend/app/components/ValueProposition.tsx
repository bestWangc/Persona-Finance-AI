'use client';

import React from 'react';
import RiskRadarChart from './RiskRadarChart';
import EvolutionBar from './EvolutionBar';

const ValueProposition = () => {
  return (
    <section className="py-16">
      <h2 className="text-center  my-16 text-white bg-clip-text text-transparent text-4xl font-bold">下一代交易协议的进化</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-[5%] pb-16 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2.5 hover:border-[#00c7ff] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-gradient-to-r before:from-neon-purple before:to-neon-green text-white border border-[rgba(0,199,255,0.2)]" style={{ backgroundColor: 'rgba(0, 15, 34, 0.7)' }}>
          <div className="h-[200px] rounded-2xl mb-4 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0, 15, 40, 0.7)' }}>
            <RiskRadarChart />
          </div>
          <h3 className="text-2xl my-4">动态人格铸造</h3>
          <p className="text-gray-400 mb-6">基于链上行为数据分析创建初始交易人格</p>
          <ul className="list-none mt-6">
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              Gas消耗模式分析
            </li>
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              持仓波动率建模
            </li>
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              交易风险偏好识别
            </li>
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              交互协议权重分析
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl p-8 border border-[rgba(0,199,255,0.2)] relative overflow-hidden transition-all duration-300 hover:-translate-y-2.5 hover:border-[#00c7ff] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-gradient-to-r before:from-neon-purple before:to-neon-green text-white" style={{ backgroundColor: 'rgba(0, 15, 34, 0.7)' }}>
          <div className="h-[100px] rounded-2xl flex items-center justify-center font-mono text-neon-blue tracking-wider text-xl mb-4 relative overflow-hidden text-[#00c7ff]" style={{ backgroundColor: 'rgba(0, 20, 40, 0.7)' }}>
            ATGC<span className="text-[#00ff9d] animate-blink">G</span>AA...T<span className="animate-blink">→</span>ATCGCAA...
          </div>
          <h3 className="text-2xl my-4">行为进化引擎</h3>
          <p className="text-gray-400 mb-6">每一次交易都是一次基因序列突变</p>
          <EvolutionBar
            level={6}
            currentXP={7800}
            maxXP={10000}
            className="mt-4"
          />
          <ul className="list-none mt-6">
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              市场反馈适应性进化
            </li>
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              环境感知策略突变
            </li>
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              协议组合能力进化
            </li>
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              跨链策略基因表达
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl p-8 border border-[rgba(0,199,255,0.2)] relative overflow-hidden transition-all duration-300 hover:-translate-y-2.5 hover:border-[#00c7ff] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-gradient-to-r before:from-neon-purple before:to-neon-green text-white" style={{ backgroundColor: 'rgba(0, 15, 34, 0.7)' }}>
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            <span className="px-4 py-2 rounded-[20px] text-sm font-semibold bg-gradient-to-r from-neon-purple to-purple-600">
              租赁收益
            </span>
            <span className="px-4 py-2 rounded-[20px] text-sm font-semibold bg-gradient-to-r from-neon-green to-green-600">
              基因交易
            </span>
            <span className="px-4 py-2 rounded-[20px] text-sm font-semibold bg-gradient-to-r from-neon-blue to-blue-600">
              治理代币
            </span>
          </div>
          <h3 className="text-2xl my-4">社交金融生态</h3>
          <p className="text-gray-400 mb-6">完整价值生态捕获策略生命周期</p>
          <div className="bg-neon-blue/10 border border-neon-blue px-6 py-3 rounded-lg text-neon-blue font-mono text-center mt-4">
            顶级策略年化收益分配: <strong className="text-neon-green">1:3:6</strong>
          </div>
          <ul className="list-none mt-6">
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              去中心化人格租赁市场
            </li>
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              策略基因组合交易协议
            </li>
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              影响力代币挖矿机制
            </li>
            <li className="pl-6 mb-3 relative before:content-['↳'] before:absolute before:left-0 before:text-[#00c7ff]">
              社区策略繁殖池
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
