'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';

// 模拟人格数据类型
type Personality = {
  id: string;
  name: string;
  riskProfile: 'conservative' | 'balanced' | 'aggressive';
  capitalSize: string;
  tradingPreferences: string[];
  tradingFrequency: 'low' | 'medium' | 'high';
  tradingTime: string[];
  performance: {
    totalTrades: number;
    winRate: number;
    averageReturn: number;
    totalReturn: number;
  };
  tags: string[];
  createdAt: string;
};

// 模拟人格数据
const mockPersonality: Personality = {
  id: '1',
  name: 'Cautious Optimist',
  riskProfile: 'balanced',
  capitalSize: '50K-500K',
  tradingPreferences: ['Spot Trading', 'Arbitrage', 'Liquidity Mining'],
  tradingFrequency: 'medium',
  tradingTime: ['Morning Session', 'Afternoon Session'],
  performance: {
    totalTrades: 156,
    winRate: 68.5,
    averageReturn: 2.3,
    totalReturn: 15.8,
  },
  tags: ['Risk-Aware', 'Diversified', 'Technical Analysis'],
  createdAt: '2024-03-01T00:00:00Z',
};

export default function Personality() {
  const [personality] = useState<Personality>(mockPersonality);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 头部信息 */}
          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{personality.name}</h1>
                <p className="text-gray-400">
                  Created on {new Date(personality.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex gap-2">
                {personality.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 性能指标 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <StatCard
                title="Total Trades"
                value={personality.performance.totalTrades.toString()}
              />
              <StatCard
                title="Win Rate"
                value={`${personality.performance.winRate}%`}
              />
              <StatCard
                title="Average Return"
                value={`${personality.performance.averageReturn}%`}
              />
              <StatCard
                title="Total Return"
                value={`${personality.performance.totalReturn}%`}
              />
            </div>

            {/* 详细信息 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Trading Profile</h2>
                <div className="space-y-4">
                  <InfoItem
                    label="Risk Profile"
                    value={personality.riskProfile}
                  />
                  <InfoItem
                    label="Capital Size"
                    value={personality.capitalSize}
                  />
                  <InfoItem
                    label="Trading Frequency"
                    value={personality.tradingFrequency}
                  />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Preferences</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Trading Preferences
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {personality.tradingPreferences.map((pref) => (
                        <span
                          key={pref}
                          className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                        >
                          {pref}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Trading Time
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {personality.tradingTime.map((time) => (
                        <span
                          key={time}
                          className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const StatCard = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-gray-700 rounded-lg p-4">
    <h3 className="text-sm text-gray-400 mb-1">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <label className="block text-sm text-gray-400 mb-1">{label}</label>
    <p className="text-lg capitalize">{value}</p>
  </div>
); 