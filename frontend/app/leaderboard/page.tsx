'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';

// 模拟排行榜数据类型
type LeaderboardEntry = {
  id: string;
  rank: number;
  name: string;
  address: string;
  performance: {
    totalReturn: number;
    winRate: number;
    totalTrades: number;
    averageReturn: number;
  };
  personality: {
    riskProfile: string;
    tradingFrequency: string;
  };
};

// 模拟排行榜数据
const mockLeaderboardData: LeaderboardEntry[] = [
  {
    id: '1',
    rank: 1,
    name: 'Crypto King',
    address: '0x1234...5678',
    performance: {
      totalReturn: 156.8,
      winRate: 78.5,
      totalTrades: 245,
      averageReturn: 3.2,
    },
    personality: {
      riskProfile: 'Aggressive',
      tradingFrequency: 'High',
    },
  },
  {
    id: '2',
    rank: 2,
    name: 'Steady Trader',
    address: '0x8765...4321',
    performance: {
      totalReturn: 142.3,
      winRate: 82.1,
      totalTrades: 189,
      averageReturn: 2.8,
    },
    personality: {
      riskProfile: 'Balanced',
      tradingFrequency: 'Medium',
    },
  },
  {
    id: '3',
    rank: 3,
    name: 'Safe Investor',
    address: '0x2468...1357',
    performance: {
      totalReturn: 128.6,
      winRate: 85.4,
      totalTrades: 156,
      averageReturn: 2.5,
    },
    personality: {
      riskProfile: 'Conservative',
      tradingFrequency: 'Low',
    },
  },
];

export default function Leaderboard() {
  const [timeFilter, setTimeFilter] = useState<'7d' | '30d' | 'all'>('30d');
  const [entries] = useState<LeaderboardEntry[]>(mockLeaderboardData);

  return (
    <div className="min-h-screen text-white relative">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Trading Leaderboard</h1>

            <div className="flex gap-4">
              <FilterButton active={timeFilter === '7d'} onClick={() => setTimeFilter('7d')}>
                7 Days
              </FilterButton>
              <FilterButton active={timeFilter === '30d'} onClick={() => setTimeFilter('30d')}>
                30 Days
              </FilterButton>
              <FilterButton active={timeFilter === 'all'} onClick={() => setTimeFilter('all')}>
                All Time
              </FilterButton>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Trader
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Total Return
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Win Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Total Trades
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Avg. Return
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Trading Style
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {entries.map((entry) => (
                  <tr key={entry.id} className="hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`text-lg font-bold ${entry.rank === 1 ? 'text-yellow-400' :
                          entry.rank === 2 ? 'text-gray-400' :
                            entry.rank === 3 ? 'text-amber-600' :
                              'text-gray-500'
                          }`}>
                          #{entry.rank}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="font-medium">{entry.name}</div>
                        <div className="text-sm text-gray-400">{entry.address}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-green-400">+{entry.performance.totalReturn}%</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {entry.performance.winRate}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {entry.performance.totalTrades}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      +{entry.performance.averageReturn}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm">{entry.personality.riskProfile}</span>
                        <span className="text-xs text-gray-400">{entry.personality.tradingFrequency}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

const FilterButton = ({
  children,
  active,
  onClick
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${active
      ? 'bg-blue-600 text-white'
      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      }`}
  >
    {children}
  </button>
);