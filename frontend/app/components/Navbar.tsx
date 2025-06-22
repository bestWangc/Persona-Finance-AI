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
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-neon-blue/20 transition-all duration-300" style={{ backgroundColor: 'rgba(0, 15, 34, 0.8)' }}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className={`text-xl font-bold ${isActive('/') ? 'text-blue-400' : ''}`}
          >
            Persona Finance AI
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              href="/create-nft"
              className={`text-sm font-medium transition-all duration-300 hover:text-neon-blue hover:scale-105 ${isActive('/create-nft') ? 'text-neon-blue' : 'text-white'}`}
            >
              Create NFT
            </Link>
            <Link
              href="/trading-history"
              className={`text-sm font-medium transition-all duration-300 hover:text-neon-blue hover:scale-105 ${isActive('/trading-history') ? 'text-neon-blue' : 'text-white'}`}
            >
              Trading History
            </Link>
            <Link
              href="/personality"
              className={`text-sm font-medium transition-all duration-300 hover:text-neon-blue hover:scale-105 ${isActive('/personality') ? 'text-neon-blue' : 'text-white'}`}
            >
              Personality
            </Link>
            <Link
              href="/rental"
              className={`text-sm font-medium transition-all duration-300 hover:text-neon-blue hover:scale-105 ${isActive('/rental') ? 'text-neon-blue' : 'text-white'}`}
            >
              NFT Rental
            </Link>
            <Link
              href="/leaderboard"
              className={`text-sm font-medium transition-all duration-300 hover:text-neon-blue hover:scale-105 ${isActive('/leaderboard') ? 'text-neon-blue' : 'text-white'}`}
            >
              Leaderboard
            </Link>
            <div className="ml-4">
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
                }) => {
                  // Note: If your app doesn't use authentication, you
                  // can remove all 'authenticationStatus' checks
                  const ready = mounted && authenticationStatus !== 'loading';
                  const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                      authenticationStatus === 'authenticated');

                  return (
                    <div
                      {...(!ready && {
                        'aria-hidden': true,
                        'style': {
                          opacity: 0,
                          pointerEvents: 'none',
                          userSelect: 'none',
                        },
                      })}
                    >
                      {(() => {
                        if (!connected) {
                          return (
                            <button
                              onClick={openConnectModal}
                              type="button"
                              className="px-6 py-2.5 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/30 border border-neon-blue/30"
                              style={{
                                background: 'linear-gradient(135deg, #bd00ff 0%, #00c7ff 100%)',
                              }}
                            >
                              Connect Wallet
                            </button>
                          );
                        }

                        if (chain.unsupported) {
                          return (
                            <button
                              onClick={openChainModal}
                              type="button"
                              className="px-6 py-2.5 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 border border-red-500/50"
                              style={{
                                background: 'linear-gradient(135deg, #ff2e6d 0%, #ff6b6b 100%)',
                              }}
                            >
                              Wrong network
                            </button>
                          );
                        }

                        return (
                          <div className="flex gap-3">
                            <button
                              onClick={openChainModal}
                              className="flex items-center px-4 py-2.5 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 border border-neon-blue/30"
                              style={{
                                background: 'linear-gradient(135deg, rgba(189, 0, 255, 0.8) 0%, rgba(0, 199, 255, 0.8) 100%)',
                                backdropFilter: 'blur(10px)',
                              }}
                              type="button"
                            >
                              {chain.hasIcon && (
                                <div
                                  style={{
                                    background: chain.iconBackground,
                                    width: 20,
                                    height: 20,
                                    borderRadius: 999,
                                    overflow: 'hidden',
                                    marginRight: 8,
                                  }}
                                >
                                  {chain.iconUrl && (
                                    <img
                                      alt={chain.name ?? 'Chain icon'}
                                      src={chain.iconUrl}
                                      style={{ width: 20, height: 20 }}
                                    />
                                  )}
                                </div>
                              )}
                              {chain.name}
                            </button>

                            <button
                              onClick={openAccountModal}
                              type="button"
                              className="px-4 py-2.5 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-green/30 border border-neon-green/30"
                              style={{
                                background: 'linear-gradient(135deg, #00ff9d 0%, #00c7ff 100%)',
                              }}
                            >
                              {account.displayName}
                              {account.displayBalance
                                ? ` (${account.displayBalance})`
                                : ''}
                            </button>
                          </div>
                        );
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            </div>
          </div>
        </div>
      </nav>
      {/* 添加顶部间距，避免内容被固定导航栏遮挡 */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar; 