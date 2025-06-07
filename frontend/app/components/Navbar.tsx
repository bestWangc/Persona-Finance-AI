'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import LoadingIndicator from './LoadingIndicator';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <LoadingIndicator />
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className={`text-xl font-bold ${isActive('/') ? 'text-blue-400' : ''}`}
          >
            Persona Finance AI
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/create-nft"
              className={`hover:text-blue-400 transition-colors ${isActive('/create-nft') ? 'text-blue-400' : ''}`}
            >
              Create NFT
            </Link>
            <Link
              href="/trading-history"
              className={`hover:text-blue-400 transition-colors ${isActive('/trading-history') ? 'text-blue-400' : ''}`}
            >
              Trading History
            </Link>
            <Link
              href="/personality"
              className={`hover:text-blue-400 transition-colors ${isActive('/personality') ? 'text-blue-400' : ''}`}
            >
              Personality
            </Link>
            <Link
              href="/rental"
              className={`hover:text-blue-400 transition-colors ${isActive('/rental') ? 'text-blue-400' : ''}`}
            >
              NFT Rental
            </Link>
            <Link
              href="/leaderboard"
              className={`hover:text-blue-400 transition-colors ${isActive('/leaderboard') ? 'text-blue-400' : ''}`}
            >
              Leaderboard
            </Link>
            <ConnectButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 