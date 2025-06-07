'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { useRentalContract } from '../hooks/useRentalContract';
import { useAccount } from 'wagmi';
import { toast } from 'react-hot-toast';

// 模拟 NFT 租赁数据类型
type RentalNFT = {
  id: string;
  name: string;
  owner: string;
  personality: {
    riskProfile: string;
    tradingFrequency: string;
    winRate: number;
  };
  rentalInfo: {
    price: number;
    duration: string;
    available: boolean;
  };
  image: string;
};

// 模拟 NFT 租赁数据
const mockRentalNFTs: RentalNFT[] = [
  {
    id: '1',
    name: 'Cautious Optimist',
    owner: '0x1234...5678',
    personality: {
      riskProfile: 'Conservative',
      tradingFrequency: 'Low',
      winRate: 75.5,
    },
    rentalInfo: {
      price: 0.5,
      duration: '30 days',
      available: true,
    },
    image: '/nft-placeholder.png',
  },
  {
    id: '2',
    name: 'Aggressive Trader',
    owner: '0x8765...4321',
    personality: {
      riskProfile: 'Aggressive',
      tradingFrequency: 'High',
      winRate: 65.2,
    },
    rentalInfo: {
      price: 1.2,
      duration: '30 days',
      available: true,
    },
    image: '/nft-placeholder.png',
  },
  {
    id: '3',
    name: 'Balanced Strategist',
    owner: '0x2468...1357',
    personality: {
      riskProfile: 'Balanced',
      tradingFrequency: 'Medium',
      winRate: 68.8,
    },
    rentalInfo: {
      price: 0.8,
      duration: '30 days',
      available: false,
    },
    image: '/nft-placeholder.png',
  },
];

export default function Rental() {
  const [filter, setFilter] = useState<'all' | 'available'>('all');
  const [nfts, setNfts] = useState<RentalNFT[]>(mockRentalNFTs);
  const { address } = useAccount();
  const { handleRent, isRenting, isRentSuccess, rentalStatuses, updateRentalStatus } = useRentalContract();

  // 更新 NFT 租赁状态
  useEffect(() => {
    nfts.forEach(nft => {
      updateRentalStatus(nft.id);
    });
  }, [nfts]);

  // 监听租赁状态变化
  useEffect(() => {
    setNfts(prev => prev.map(nft => ({
      ...nft,
      rentalInfo: {
        ...nft.rentalInfo,
        available: !rentalStatuses[nft.id],
      },
    })));
  }, [rentalStatuses]);

  // 处理租赁成功
  useEffect(() => {
    if (isRentSuccess) {
      toast.success('NFT rented successfully!');
    }
  }, [isRentSuccess]);

  const handleRentNFT = async (nft: RentalNFT) => {
    if (!address) {
      toast.error('Please connect your wallet first');
      return;
    }

    try {
      await handleRent(
        nft.id,
        nft.rentalInfo.price,
        parseInt(nft.rentalInfo.duration)
      );
    } catch (error) {
      toast.error('Failed to rent NFT');
    }
  };

  const filteredNFTs = nfts.filter(
    (nft) => filter === 'all' || (filter === 'available' && nft.rentalInfo.available)
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">NFT Rental Marketplace</h1>

          <div className="flex gap-4">
            <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
              All NFTs
            </FilterButton>
            <FilterButton active={filter === 'available'} onClick={() => setFilter('available')}>
              Available
            </FilterButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNFTs.map((nft) => (
            <NFTCard
              key={nft.id}
              nft={nft}
              onRent={() => handleRentNFT(nft)}
              isRenting={isRenting}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

const NFTCard = ({
  nft,
  onRent,
  isRenting
}: {
  nft: RentalNFT;
  onRent: () => void;
  isRenting: boolean;
}) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden">
    <div className="relative h-48 bg-gray-700">
      <Image
        src={nft.image}
        alt={nft.name}
        fill
        className="object-cover"
      />
    </div>

    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{nft.name}</h3>
          <p className="text-sm text-gray-400">
            Owner: {nft.owner}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${nft.rentalInfo.available
            ? 'bg-green-900 text-green-300'
            : 'bg-red-900 text-red-300'
          }`}>
          {nft.rentalInfo.available ? 'Available' : 'Rented'}
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm text-gray-400 mb-2">Trading Personality</h4>
          <div className="grid grid-cols-2 gap-2">
            <InfoTag label="Risk Profile" value={nft.personality.riskProfile} />
            <InfoTag label="Frequency" value={nft.personality.tradingFrequency} />
            <InfoTag label="Win Rate" value={`${nft.personality.winRate}%`} />
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">Rental Price</p>
              <p className="text-xl font-bold">{nft.rentalInfo.price} ETH</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Duration</p>
              <p className="text-lg">{nft.rentalInfo.duration}</p>
            </div>
          </div>
        </div>

        <button
          onClick={onRent}
          disabled={!nft.rentalInfo.available || isRenting}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${nft.rentalInfo.available && !isRenting
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-700 cursor-not-allowed'
            }`}
        >
          {isRenting ? 'Processing...' : nft.rentalInfo.available ? 'Rent Now' : 'Currently Rented'}
        </button>
      </div>
    </div>
  </div>
);

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

const InfoTag = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-gray-700 rounded-lg p-2">
    <p className="text-xs text-gray-400">{label}</p>
    <p className="text-sm font-medium">{value}</p>
  </div>
); 