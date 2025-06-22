'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';

// 模拟交易数据类型
type Transaction = {
  id: string;
  timestamp: string;
  type: 'buy' | 'sell' | 'swap';
  token: string;
  amount: number;
  price: number;
  status: 'completed' | 'pending' | 'failed';
};

// 模拟交易数据
const mockTransactions: Transaction[] = [
  {
    id: '1',
    timestamp: '2024-03-20T10:30:00Z',
    type: 'buy',
    token: 'ETH',
    amount: 1.5,
    price: 3500,
    status: 'completed',
  },
  {
    id: '2',
    timestamp: '2024-03-20T09:15:00Z',
    type: 'sell',
    token: 'BTC',
    amount: 0.1,
    price: 65000,
    status: 'completed',
  },
  {
    id: '3',
    timestamp: '2024-03-19T15:45:00Z',
    type: 'swap',
    token: 'USDC',
    amount: 1000,
    price: 1,
    status: 'completed',
  },
];

export default function TradingHistory() {
  const [filter, setFilter] = useState<'all' | 'buy' | 'sell' | 'swap'>('all');
  const [transactions] = useState<Transaction[]>(mockTransactions);

  const filteredTransactions = transactions.filter(
    (tx) => filter === 'all' || tx.type === filter
  );

  return (
    <div className="min-h-screen text-white relative">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Trading History</h1>

          <div className="flex gap-4">
            <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
              All
            </FilterButton>
            <FilterButton active={filter === 'buy'} onClick={() => setFilter('buy')}>
              Buy
            </FilterButton>
            <FilterButton active={filter === 'sell'} onClick={() => setFilter('sell')}>
              Sell
            </FilterButton>
            <FilterButton active={filter === 'swap'} onClick={() => setFilter('swap')}>
              Swap
            </FilterButton>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-neon-blue/20" style={{ backgroundColor: 'rgba(0, 15, 34, 0.8)', backdropFilter: 'blur(10px)' }}>
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: 'rgba(0, 30, 60, 0.6)' }}>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Token
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neon-blue/20">
              {filteredTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-neon-blue/10 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {new Date(tx.timestamp).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${tx.type === 'buy' ? 'bg-green-900 text-green-300' :
                      tx.type === 'sell' ? 'bg-red-900 text-red-300' :
                        'bg-blue-900 text-blue-300'
                      }`}>
                      {tx.type.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {tx.token}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {tx.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    ${tx.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${tx.status === 'completed' ? 'bg-green-900 text-green-300' :
                      tx.status === 'pending' ? 'bg-yellow-900 text-yellow-300' :
                        'bg-red-900 text-red-300'
                      }`}>
                      {tx.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${active
      ? 'bg-neon-blue text-white border-neon-blue shadow-lg shadow-neon-blue/30'
      : 'bg-transparent text-gray-300 border-neon-blue/30 hover:bg-neon-blue/10 hover:border-neon-blue/50'
      }`}
  >
    {children}
  </button>
); 