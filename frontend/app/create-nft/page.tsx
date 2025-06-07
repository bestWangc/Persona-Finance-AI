'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';

type RiskProfile = 'conservative' | 'balanced' | 'aggressive' | 'custom';
type CapitalSize = '5k-50k' | '50k-500k' | '500k+' | 'custom';
type TradingPreference = 'spot' | 'arbitrage' | 'leverage' | 'liquidity' | 'market-making' | 'custom';
type TradingFrequency = 'low' | 'medium' | 'high' | 'custom';
type TradingTime = 'morning' | 'afternoon' | 'night' | 'custom';

export default function CreateNFT() {
  const [formData, setFormData] = useState({
    riskProfile: 'balanced' as RiskProfile,
    capitalSize: '5k-50k' as CapitalSize,
    tradingPreference: 'spot' as TradingPreference,
    tradingFrequency: 'medium' as TradingFrequency,
    tradingTime: 'morning' as TradingTime,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement NFT creation logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Create Your Trading Persona NFT</h1>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg">
          <div className="space-y-6">
            <FormSection
              title="Risk Profile"
              options={[
                { value: 'conservative', label: 'Conservative' },
                { value: 'balanced', label: 'Balanced' },
                { value: 'aggressive', label: 'Aggressive' },
                { value: 'custom', label: 'Custom' },
              ]}
              value={formData.riskProfile}
              onChange={(value) => setFormData({ ...formData, riskProfile: value as RiskProfile })}
            />

            <FormSection
              title="Capital Size"
              options={[
                { value: '5k-50k', label: '5K-50K' },
                { value: '50k-500k', label: '50K-500K' },
                { value: '500k+', label: '500K+' },
                { value: 'custom', label: 'Custom' },
              ]}
              value={formData.capitalSize}
              onChange={(value) => setFormData({ ...formData, capitalSize: value as CapitalSize })}
            />

            <FormSection
              title="Trading Preference"
              options={[
                { value: 'spot', label: 'Spot Trading' },
                { value: 'arbitrage', label: 'Arbitrage' },
                { value: 'leverage', label: 'Leverage' },
                { value: 'liquidity', label: 'Liquidity Mining' },
                { value: 'market-making', label: 'Market Making' },
                { value: 'custom', label: 'Custom' },
              ]}
              value={formData.tradingPreference}
              onChange={(value) => setFormData({ ...formData, tradingPreference: value as TradingPreference })}
            />

            <FormSection
              title="Trading Frequency"
              options={[
                { value: 'low', label: 'Low Frequency' },
                { value: 'medium', label: 'Medium Frequency' },
                { value: 'high', label: 'High Frequency' },
                { value: 'custom', label: 'Custom' },
              ]}
              value={formData.tradingFrequency}
              onChange={(value) => setFormData({ ...formData, tradingFrequency: value as TradingFrequency })}
            />

            <FormSection
              title="Trading Time"
              options={[
                { value: 'morning', label: 'Morning Session' },
                { value: 'afternoon', label: 'Afternoon Session' },
                { value: 'night', label: 'Night Session' },
                { value: 'custom', label: 'Custom' },
              ]}
              value={formData.tradingTime}
              onChange={(value) => setFormData({ ...formData, tradingTime: value as TradingTime })}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
            >
              Create NFT
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

const FormSection = ({
  title,
  options,
  value,
  onChange
}: {
  title: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) => (
  <div>
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <div className="grid grid-cols-2 gap-3">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`p-3 rounded ${value === option.value
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  </div>
); 