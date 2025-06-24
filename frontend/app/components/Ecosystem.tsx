'use client';

import React from 'react';
import DonutChart from './DonutChart';
import CountingNumber from './CountingNumber';

const Ecosystem = () => {
  return (
    <section className="py-16 px-[5%] bg-deep-space/60 border-t border-b border-neon-blue/20">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-4xl font-bold">
          Real-time Trading Strategy Ecosystem
        </h2>
        <p className="text-text-gray text-lg">
          Explore the evolutionary ecosystem of trading personalities and strategy genes in the PFAI network
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* 活跃策略卡 */}
        <div className="bg-[rgba(0,15,34,0.7)] rounded-2xl p-8 border border-neon-blue/30 relative overflow-hidden transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_10px_30px_rgba(0,199,255,0.2)] h-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-neon-purple before:via-neon-blue before:to-neon-green">
          <div className="flex items-center mb-6 text-2xl">
            <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center mr-4 text-2xl text-neon-blue">
              <i className="fas fa-microchip"></i>
            </div>
            <h3>Active Strategy Distribution</h3>
          </div>
          <p className="text-text-gray mb-8">Distribution of trading personality types and real-time activity status currently running on the platform</p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-deep-space/70 rounded-2xl p-4 border border-neon-blue/20 text-center">
              <div className="text-3xl font-bold text-neon-green mb-1 font-mono">
                <CountingNumber
                  targetNumber={42859}
                  duration={2500}
                  continuousAnimation={true}
                  className="text-neon-green"
                />
              </div>
              <div className="text-sm text-text-gray">Trading Personalities</div>
            </div>
            <div className="bg-deep-space/70 rounded-2xl p-4 border border-neon-blue/20 text-center">
              <div className="text-3xl font-bold text-neon-green mb-1 font-mono">
                <CountingNumber
                  targetNumber={18.2}
                  duration={2000}
                  continuousAnimation={true}
                  suffix="%"
                  formatNumber={false}
                  className="text-neon-green"
                />
              </div>
              <div className="text-sm text-text-gray">Monthly Growth</div>
            </div>
            <div className="bg-deep-space/70 rounded-2xl p-4 border border-neon-blue/20 text-center col-span-2">
              <div className="text-3xl font-bold text-neon-green mb-1 font-mono">
                <CountingNumber
                  targetNumber={3200000}
                  duration={3000}
                  continuousAnimation={true}
                  suffix="M"
                  formatNumber={false}
                  className="text-neon-green"
                />
              </div>
              <div className="text-sm text-text-gray">Evolution Events</div>
            </div>
          </div>

          {/* 圆环图 */}
          <div className="h-[200px] mb-6">
            <DonutChart />
          </div>

          <div className="flex flex-wrap gap-2.5">
            <div className="bg-neon-blue/10 px-4 py-1.5 rounded-[30px] text-sm font-mono text-neon-blue border border-neon-blue/30">
              ARB:0x34
            </div>
            <div className="bg-neon-blue/10 px-4 py-1.5 rounded-[30px] text-sm font-mono text-neon-blue border border-neon-blue/30">
              TRD:0x89
            </div>
            <div className="bg-neon-blue/10 px-4 py-1.5 rounded-[30px] text-sm font-mono text-neon-blue border border-neon-blue/30">
              MM:0xAB
            </div>
            <div className="bg-neon-blue/10 px-4 py-1.5 rounded-[30px] text-sm font-mono text-neon-blue border border-neon-blue/30">
              LQ:0xF3
            </div>
            <div className="bg-neon-blue/10 px-4 py-1.5 rounded-[30px] text-sm font-mono text-neon-blue border border-neon-blue/30">
              VOL:0x5D
            </div>
          </div>
        </div>

        {/* Gene Market Card */}
        <div className="bg-[rgba(0,15,34,0.7)] rounded-2xl p-8 border border-neon-blue/30 relative overflow-hidden transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_10px_30px_rgba(0,199,255,0.2)] h-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-neon-purple before:via-neon-blue before:to-neon-green">
          <div className="flex items-center mb-6 text-2xl">
            <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center mr-4 text-2xl text-neon-blue">
              <i className="fas fa-dna"></i>
            </div>
            <h3>Strategy Gene Market</h3>
          </div>
          <p className="text-text-gray mb-8">Trading volume, value and historical performance of popular strategy genes</p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-deep-space/70 rounded-2xl p-4 border border-neon-blue/20 text-center">
              <div className="text-2xl font-bold text-neon-green mb-1 font-mono">
                <CountingNumber
                  targetNumber={8.2}
                  duration={2200}
                  continuousAnimation={true}
                  prefix="$"
                  suffix="M"
                  formatNumber={false}
                  className="text-neon-green"
                />
              </div>
              <div className="text-sm text-text-gray">Daily Volume</div>
            </div>
            <div className="bg-deep-space/70 rounded-2xl p-4 border border-neon-blue/20 text-center">
              <div className="text-2xl font-bold text-neon-green mb-1 font-mono">
                <CountingNumber
                  targetNumber={12458}
                  duration={2800}
                  continuousAnimation={true}
                  className="text-neon-green"
                />
              </div>
              <div className="text-sm text-text-gray">Gene Sequences</div>
            </div>
            <div className="bg-deep-space/70 rounded-2xl p-4 border border-neon-blue/20 text-center">
              <div className="text-2xl font-bold text-neon-green mb-1 font-mono">ETH</div>
              <div className="text-sm text-text-gray">Primary Token</div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-4 pb-2.5 border-b border-neon-blue/20">
              <h4 className="font-semibold">Popular Trading Genes</h4>
              <span className="text-text-gray">Avg ROI</span>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center p-4 bg-blue-950/50 rounded-2xl transition-all duration-300 hover:bg-neon-blue/10">
                <div className="w-7 h-7 bg-gradient-to-br from-neon-purple to-neon-blue rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  1
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-xl mr-4">
                  <i className="fas fa-bolt"></i>
                </div>
                <div className="flex-1">
                  <div className="font-semibold mb-1">Lightning Arbitrage Gene</div>
                  <div className="text-sm text-text-gray font-mono">0x8A-F3-4D</div>
                </div>
                <div className="font-mono font-bold text-neon-green">+38.5%</div>
              </div>

              <div className="flex items-center p-4 bg-blue-950/50 rounded-2xl transition-all duration-300 hover:bg-neon-blue/10">
                <div className="w-7 h-7 bg-gradient-to-br from-neon-purple to-neon-blue rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  2
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-xl mr-4">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="flex-1">
                  <div className="font-semibold mb-1">Trend Following Strategy</div>
                  <div className="text-sm text-text-gray font-mono">0x9B-C2-5E</div>
                </div>
                <div className="font-mono font-bold text-neon-green">+32.1%</div>
              </div>

              <div className="flex items-center p-4 bg-blue-950/50 rounded-2xl transition-all duration-300 hover:bg-neon-blue/10">
                <div className="w-7 h-7 bg-gradient-to-br from-neon-purple to-neon-blue rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  3
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-xl mr-4">
                  <i className="fas fa-coins"></i>
                </div>
                <div className="flex-1">
                  <div className="font-semibold mb-1">Multi-Pool Liquidity</div>
                  <div className="text-sm text-text-gray font-mono">0x5D-A8-F1</div>
                </div>
                <div className="font-mono font-bold text-neon-green">+27.8%</div>
              </div>
            </div>
          </div>

          <a href="#" className="inline-flex items-center text-neon-blue mt-8 font-semibold gap-2.5 no-underline">
            Explore Full Gene Market <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        {/* Evolution Ecosystem Card */}
        <div className="bg-[rgba(0,15,34,0.7)] rounded-2xl p-8 border border-neon-blue/30 relative overflow-hidden transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_10px_30px_rgba(0,199,255,0.2)] h-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-neon-purple before:via-neon-blue before:to-neon-green">
          <div className="flex items-center mb-6 text-2xl">
            <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center mr-4 text-2xl text-neon-blue">
              <i className="fas fa-project-diagram"></i>
            </div>
            <h3>Strategy Evolution Map</h3>
          </div>
          <p className="text-text-gray mb-8">Evolution paths of trading strategies and ecological relationships of emerging strategy clusters</p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-deep-space/70 rounded-2xl p-4 border border-neon-blue/20 text-center">
              <div className="text-2xl font-bold text-neon-green mb-1 font-mono">
                <CountingNumber
                  targetNumber={142}
                  duration={1800}
                  continuousAnimation={true}
                  className="text-neon-green"
                />
              </div>
              <div className="text-sm text-text-gray">Strategy Clusters</div>
            </div>
            <div className="bg-deep-space/70 rounded-2xl p-4 border border-neon-blue/20 text-center">
              <div className="text-2xl font-bold text-neon-green mb-1 font-mono">
                <CountingNumber
                  targetNumber={29}
                  duration={1500}
                  continuousAnimation={true}
                  className="text-neon-green"
                />
              </div>
              <div className="text-sm text-text-gray">New Mutations</div>
            </div>
            <div className="bg-deep-space/70 rounded-2xl p-4 border border-neon-blue/20 text-center">
              <div className="text-2xl font-bold text-neon-green mb-1 font-mono">
                <CountingNumber
                  targetNumber={0.48}
                  duration={2000}
                  continuousAnimation={true}
                  suffix="%"
                  formatNumber={false}
                  className="text-neon-green"
                />
              </div>
              <div className="text-sm text-text-gray">Daily Mutation Rate</div>
            </div>
          </div>

          <div className="h-[400px] w-full bg-blue-950/70 rounded-2xl mt-12 border border-neon-blue/30 relative overflow-hidden">
            {/* 交互式地图节点 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-deep-space/90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-2 border-neon-purple shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_0_20px_rgba(0,199,255,0.7)]">
              <div className="text-2xl">
                <i className="fas fa-brain"></i>
              </div>
              <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-neon-blue">
                Core Strategy
              </div>
            </div>

            <div className="absolute top-[30%] left-[20%] w-[70px] h-[70px] bg-deep-space/90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-2 border-neon-blue shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_0_20px_rgba(0,199,255,0.7)]">
              <div className="text-xl">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-neon-blue">
                Arbitrage
              </div>
            </div>

            <div className="absolute top-[30%] right-[20%] w-[70px] h-[70px] bg-deep-space/90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-2 border-neon-blue shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_0_20px_rgba(0,199,255,0.7)]">
              <div className="text-xl">
                <i className="fas fa-trending-up"></i>
              </div>
              <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-neon-blue">
                Trend Following
              </div>
            </div>

            <div className="absolute bottom-[30%] left-[20%] w-[70px] h-[70px] bg-deep-space/90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-2 border-neon-blue shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_0_20px_rgba(0,199,255,0.7)]">
              <div className="text-xl">
                <i className="fas fa-flask"></i>
              </div>
              <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-neon-blue">
                Volatility
              </div>
            </div>

            <div className="absolute bottom-[30%] right-[20%] w-[70px] h-[70px] bg-deep-space/90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-2 border-neon-blue shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_0_20px_rgba(0,199,255,0.7)]">
              <div className="text-xl">
                <i className="fas fa-link"></i>
              </div>
              <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-neon-blue">
                Cross-chain
              </div>
            </div>

            <div className="absolute top-[15%] left-[15%] w-10 h-10 bg-deep-space/90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-2 border-neon-green shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_0_20px_rgba(0,199,255,0.7)]">
              <div className="text-sm">
                <i className="fas fa-bolt"></i>
              </div>
              <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-neon-blue">
                0x8A
              </div>
            </div>

            <div className="absolute top-[15%] left-[25%] w-10 h-10 bg-deep-space/90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-2 border-neon-green shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_0_20px_rgba(0,199,255,0.7)]">
              <div className="text-sm">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-neon-blue">
                0xF3
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
