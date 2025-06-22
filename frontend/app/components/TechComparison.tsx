'use client';

import React from 'react';
import CountingNumber from './CountingNumber';

const TechComparison = () => {
  return (
    <section className="border-t border-b border-neon-blue/20 py-16 px-[5%] my-12" style={{ backgroundColor: 'rgba(0, 15, 34, 0.6)' }}>
      <h2 className="text-center text-4xl mb-12 font-bold">突破传统AI交易天花板</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Headers */}
        <div className="font-semibold p-6 rounded-2xl text-center text-lg flex items-center justify-center text-white" style={{ backgroundColor: 'rgba(0, 30, 60, 0.6)' }}>
          传统系统
        </div>
        <div className="font-semibold p-6 rounded-2xl text-center text-lg flex items-center justify-center text-white" style={{ backgroundColor: 'rgba(0, 30, 60, 0.6)' }}>
          解决方案
        </div>
        <div className="font-semibold p-6 rounded-2xl text-center text-lg flex items-center justify-center text-white" style={{ backgroundColor: 'rgba(0, 30, 60, 0.6)' }}>
          PFAI突破
        </div>

        {/* Row 1 */}
        <div className="p-6 rounded-2xl flex items-center text-danger border-l-4 border-danger" style={{ backgroundColor: 'rgba(0, 20, 40, 0.7)' }}>
          ❌ 静态策略复制
        </div>
        <div className="flex items-center justify-center text-3xl text-neon-green">
          →
        </div>
        <div className="p-6 rounded-2xl flex items-center text-success border-l-4 border-success" style={{ backgroundColor: 'rgba(0, 20, 40, 0.7)' }}>
          ✅ 环境自适应突变
        </div>

        {/* Row 2 */}
        <div className="p-6 rounded-2xl flex items-center text-danger border-l-4 border-danger" style={{ backgroundColor: 'rgba(0, 20, 40, 0.7)' }}>
          ❌ 参数固化回测
        </div>
        <div className="flex items-center justify-center text-3xl text-neon-green">
          →
        </div>
        <div className="p-6 rounded-2xl flex items-center text-success border-l-4 border-success" style={{ backgroundColor: 'rgba(0, 20, 40, 0.7)' }}>
          ✅ 实时链上强化学习
        </div>

        {/* Row 3 */}
        <div className="p-6 rounded-2xl flex items-center text-danger border-l-4 border-danger" style={{ backgroundColor: 'rgba(0, 20, 40, 0.7)' }}>
          ❌ 封闭策略黑箱
        </div>
        <div className="flex items-center justify-center text-3xl text-neon-green">
          →
        </div>
        <div className="p-6 rounded-2xl flex items-center text-success border-l-4 border-success" style={{ backgroundColor: 'rgba(0, 20, 40, 0.7)' }}>
          ✅ 可组合策略基因
        </div>
      </div>

      {/* Live Proof */}
      <div className="flex flex-col md:flex-row justify-center gap-16 mt-12 text-center">
        <div className="p-6 px-10 rounded-xl min-w-[250px] border border-neon-blue/20 text-white" style={{ backgroundColor: 'rgba(0, 15, 34, 0.7)' }}>
          <span className="text-4xl font-bold block mb-2 text-neon-green font-mono">
            <CountingNumber
              targetNumber={12458}
              duration={2800}
              continuousAnimation={true}
              className="text-neon-green"
            />
          </span>
          <span className="text-text-gray">人格进化事件今日发生</span>
        </div>
        <div className="p-6 px-10 rounded-xl min-w-[250px] border border-neon-blue/20 text-white" style={{ backgroundColor: 'rgba(0, 15, 34, 0.7)' }}>
          <span className="text-4xl font-bold block mb-2 text-neon-green font-mono">
            $
            <CountingNumber
              targetNumber={2345}
              duration={2800}
              continuousAnimation={true}
              className="text-neon-green"
            />
            M
          </span>
          <span className="text-text-gray">基因交易量</span>
        </div>
      </div>
    </section>
  );
};

export default TechComparison;
