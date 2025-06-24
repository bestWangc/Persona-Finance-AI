'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import AddressDisplay from '../components/AddressDisplay';
import Image from 'next/image';
import { useRentalContract } from '../hooks/useRentalContract';
import { useAccount } from 'wagmi';
import { toast } from 'react-hot-toast';
import { RealNFTData } from '../lib/nft-service';

interface RentalClientProps {
  initialNfts: RealNFTData[];
}

export default function RentalClient({ initialNfts }: RentalClientProps) {
  const [filter, setFilter] = useState<'all' | 'available'>('all');
  const { address } = useAccount();
  const { handleRent, isRenting, isRentSuccess, rentalStatuses, updateRentalStatus } = useRentalContract();

  // 更新 NFT 租赁状态
  useEffect(() => {
    initialNfts.forEach(nft => {
      updateRentalStatus(nft.id);
    });
  }, [initialNfts, updateRentalStatus]);

  // 创建包含租赁状态的 NFT 列表
  const nftsWithRentalStatus = initialNfts.map(nft => ({
    ...nft,
    rentalInfo: {
      ...nft.rentalInfo,
      available: !rentalStatuses[nft.id],
    },
  }));

  const handleRentNFT = async (nft: RealNFTData) => {
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

  const filteredNFTs = nftsWithRentalStatus.filter(
    (nft) => filter === 'all' || (filter === 'available' && nft.rentalInfo.available)
  );

  return (
    <div className="min-h-screen text-white relative">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
            NFT Rental Marketplace
          </h1>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            Rent trading personalities to enhance your DeFi strategies. Each NFT contains unique trading behaviors and risk profiles.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex gap-4 p-1 rounded-lg border border-neon-blue/30" style={{backgroundColor: 'rgba(0, 15, 34, 0.6)'}}>
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

        {filteredNFTs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-xl text-gray-400">No NFTs found</div>
          </div>
        )}
      </main>
    </div>
  );
}

const NFTCard = ({
  nft,
  onRent,
  isRenting
}: {
  nft: RealNFTData;
  onRent: () => void;
  isRenting: boolean;
}) => (
  <div className="rounded-2xl overflow-hidden border border-neon-blue/30 transition-all duration-300 hover:border-neon-blue hover:-translate-y-2 group" style={{backgroundColor: 'rgba(0, 15, 34, 0.8)', backdropFilter: 'blur(10px)'}}>
    {/* NFT Image */}
    <div className="relative h-64 bg-gradient-to-br from-deep-space to-space-dark overflow-hidden">
      <div className="absolute inset-0 p-2">
        <Image
          src={nft.image}
          alt={nft.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/nft-placeholder.svg';
          }}
        />
      </div>
      {/* Status Badge */}
      <div className="absolute top-4 right-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${nft.rentalInfo.available
          ? 'bg-neon-green/20 text-neon-green border border-neon-green/30'
          : 'bg-red-500/20 text-red-400 border border-red-500/30'
          }`}>
          {nft.rentalInfo.available ? 'Available' : 'Rented'}
        </span>
      </div>
    </div>

    <div className="p-6 text-white">
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2 text-white">{nft.name}</h3>
        <p className="text-sm text-text-gray">
          Owner: <AddressDisplay address={nft.owner} />
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm text-text-gray mb-3">Trading Personality</h4>
          <div className="grid grid-cols-1 gap-3">
            <InfoTag label="Risk Profile" value={nft.personality.riskProfile} />
            <InfoTag label="Frequency" value={nft.personality.tradingFrequency} />
            <InfoTag label="Win Rate" value={`${nft.personality.winRate}%`} />
          </div>
        </div>

        <div className="border-t border-neon-blue/20 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-text-gray mb-1">Rental Price</p>
              <p className="text-xl font-bold text-neon-green">{nft.rentalInfo.price} ETH</p>
            </div>
            <div>
              <p className="text-sm text-text-gray mb-1">Duration</p>
              <p className="text-lg text-white">{nft.rentalInfo.duration}</p>
            </div>
          </div>
        </div>

        <button
          onClick={onRent}
          disabled={!nft.rentalInfo.available || isRenting}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${nft.rentalInfo.available && !isRenting
            ? 'bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-purple text-white hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/30'
            : 'bg-gray-700/50 cursor-not-allowed text-gray-400'
            }`}
        >
          {isRenting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </div>
          ) : nft.rentalInfo.available ? 'Rent Now' : 'Currently Rented'}
        </button>
      </div>
    </div>
  </div>
);

const InfoTag = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-lg p-3 border border-neon-blue/20 transition-all duration-300 hover:border-neon-blue/40" style={{backgroundColor: 'rgba(0, 30, 60, 0.4)'}}>
    <p className="text-xs text-text-gray mb-1">{label}</p>
    <p className="text-sm font-medium text-white">{value}</p>
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
    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${active
      ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-lg shadow-neon-blue/30'
      : 'text-text-gray hover:text-white hover:bg-neon-blue/20'
      }`}
  >
    {children}
  </button>
);
