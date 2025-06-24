'use client';

import React from 'react';
import CountingNumber from './CountingNumber';

const TechComparison = () => {
  return (
    <section className="border-t border-b border-neon-blue/20 py-16 px-[5%] my-12" style={{ backgroundColor: 'rgba(0, 15, 34, 0.6)' }}>
      <h2 className="text-center text-4xl mb-12 font-bold">Shattering AI Trading Ceilings</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Headers */}
        <div className="font-semibold p-6 rounded-2xl text-center text-lg flex items-center justify-center text-white" style={{ backgroundColor: 'rgba(0, 30, 60, 0.6)' }}>
          Legacy Trading System
        </div>
        <div className="font-semibold p-6 rounded-2xl text-center text-lg flex items-center justify-center text-white" style={{ backgroundColor: 'rgba(0, 30, 60, 0.6)' }}>
          Solution
        </div>
        <div className="font-semibold p-6 rounded-2xl text-center text-lg flex items-center justify-center text-white" style={{ backgroundColor: 'rgba(0, 30, 60, 0.6)' }}>
          PFAI
        </div>

        {/* Row 1 */}
        <div className="p-6 rounded-2xl flex items-center text-danger border-l-4 border-danger" style={{ backgroundColor: 'rgba(0, 20, 40, 0.7)' }}>
          ❌ Static Strategy Replication
        </div>
        <div className="flex items-center justify-center text-3xl text-neon-green">
          →
        </div>
        <div className="p-6 rounded-2xl flex items-center text-success border-l-4 border-success" style={{ backgroundColor: 'rgba(0, 20, 40, 0.7)' }}>
          ✅ Environment-Adaptive Evolution
        </div>

        {/* Row 2 */}
        <div className="p-6 rounded-2xl flex items-center text-danger border-l-4 border-danger" style={{ backgroundColor: 'rgba(0, 20, 40, 0.7)' }}>
          ❌ Param-Free Backtest
        </div>
        <div className="flex items-center justify-center text-3xl text-neon-green">
          →
        </div>
        <div className="p-6 rounded-2xl flex items-center text-success border-l-4 border-success" style={{ backgroundColor: 'rgba(0, 20, 40, 0.7)' }}>
          ✅ Real-Time On-Chain RL
        </div>

        {/* Row 3 */}
        <div className="p-6 rounded-2xl flex items-center text-danger border-l-4 border-danger" style={{ backgroundColor: 'rgba(0, 20, 40, 0.7)' }}>
          ❌ Closed-Strategy Blackbox
        </div>
        <div className="flex items-center justify-center text-3xl text-neon-green">
          →
        </div>
        <div className="p-6 rounded-2xl flex items-center text-success border-l-4 border-success" style={{ backgroundColor: 'rgba(0, 20, 40, 0.7)' }}>
          ✅ Transparent Composable Strategies
        </div>
      </div>

      {/* Live Proof */}
      <div className="flex flex-col md:flex-row justify-center gap-16 mt-12 text-center">
        <div className="p-6 px-10 rounded-xl min-w-[250px] border border-neon-blue/20 text-white" style={{ backgroundColor: 'rgba(0, 15, 34, 0.7)' }}>
          <span className="text-4xl font-bold block mb-2 text-neon-green font-mono">
            <CountingNumber
              targetNumber={12}
              duration={2800}
              continuousAnimation={true}
              className="text-neon-green"
            />
          </span>
          <span className="text-text-gray">Total Persona Evolution Events</span>
        </div>
        <div className="p-6 px-10 rounded-xl min-w-[250px] border border-neon-blue/20 text-white" style={{ backgroundColor: 'rgba(0, 15, 34, 0.7)' }}>
          <span className="text-4xl font-bold block mb-2 text-neon-green font-mono">
            $
            <CountingNumber
              targetNumber={0.1}
              duration={2800}
              continuousAnimation={true}
              className="text-neon-green"
            />
            M
          </span>
          <span className="text-text-gray">Volume traded</span>
        </div>
      </div>
    </section>
  );
};

export default TechComparison;
