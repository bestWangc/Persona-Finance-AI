import { useState, useEffect } from "react";
import { useReadContract, useReadContracts } from "wagmi";
import { Address } from "viem";

// 合约地址
const CONTRACT_ADDRESS =
  "0x792B4499024284eDbB1448eabC7B39a0C0010894" as Address;

// 简化的 ABI，只包含我们需要的方法
const CONTRACT_ABI = [
  {
    inputs: [{ name: "tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

export interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes: Array<{
    trait_type: string;
    value: string | number;
  }>;
}

export interface RealNFTData {
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
  metadata: NFTMetadata | null;
}

export const useNFTData = () => {
  const [nfts, setNfts] = useState<RealNFTData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 获取总供应量
  const { data: totalSupply } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "totalSupply",
  });

  // 获取 NFT 数据
  useEffect(() => {
    const fetchNFTData = async () => {
      try {
        setLoading(true);
        const nftData: RealNFTData[] = [];

        // 获取 tokenId 0, 1, 2 的数据
        const tokenIds = [0, 1, 2];

        for (const tokenId of tokenIds) {
          try {
            // 获取 tokenURI
            const tokenURIResponse = await fetch(
              `/api/nft-data?tokenId=${tokenId}&contractAddress=${CONTRACT_ADDRESS}`
            );

            if (!tokenURIResponse.ok) {
              console.warn(
                `Failed to fetch token ${tokenId}: ${tokenURIResponse.status}`
              );
              continue; // 跳过这个 token，继续下一个
            }

            const { tokenURI, owner } = await tokenURIResponse.json();

            if (tokenURI) {
              // 获取元数据
              let metadata: NFTMetadata | null = null;
              try {
                // 如果是 IPFS URL，转换为可访问的 URL
                const metadataUrl = tokenURI.startsWith("ipfs://")
                  ? tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/")
                  : tokenURI;

                const metadataResponse = await fetch(metadataUrl);
                if (metadataResponse.ok) {
                  metadata = await metadataResponse.json();
                }
              } catch (metadataError) {
                console.error(
                  `Failed to fetch metadata for token ${tokenId}:`,
                  metadataError
                );
              }

              // 从元数据中提取人格特征
              const personality = extractPersonalityFromMetadata(metadata);

              // 为不同的 tokenId 设置不同的价格和可用性
              const rentalInfo = {
                price: 0.3 + tokenId * 0.2, // 0.3, 0.5, 0.7 ETH
                duration: "30 days",
                available: tokenId !== 1, // tokenId 1 设为不可用，其他可用
              };

              nftData.push({
                id: tokenId.toString(),
                name: metadata?.name || `Trading Personality #${tokenId}`,
                owner: owner || "0x792B...0894",
                personality,
                rentalInfo,
                image: metadata?.image
                  ? metadata.image.startsWith("ipfs://")
                    ? metadata.image.replace("ipfs://", "https://ipfs.io/ipfs/")
                    : metadata.image
                  : "/nft-placeholder.svg",
                metadata,
              });
            }
          } catch (tokenError) {
            console.error(
              `Failed to fetch data for token ${tokenId}:`,
              tokenError
            );

            // 如果获取真实数据失败，添加一个示例 NFT
            const fallbackPersonalities = [
              {
                riskProfile: "Conservative",
                tradingFrequency: "Low",
                winRate: 78,
              },
              {
                riskProfile: "Balanced",
                tradingFrequency: "Medium",
                winRate: 75,
              },
              {
                riskProfile: "Aggressive",
                tradingFrequency: "High",
                winRate: 68,
              },
            ];

            nftData.push({
              id: tokenId.toString(),
              name: `Trading Personality #${tokenId}`,
              owner: "0x792B...0894",
              personality:
                fallbackPersonalities[tokenId] || fallbackPersonalities[1],
              rentalInfo: {
                price: 0.3 + tokenId * 0.2,
                duration: "30 days",
                available: tokenId !== 1,
              },
              image: "/nft-placeholder.svg",
              metadata: null,
            });
          }
        }

        setNfts(nftData);
        setError(null);
      } catch (err) {
        setError("Failed to fetch NFT data");
        console.error("Error fetching NFT data:", err);

        // 设置备用数据 - 3个NFT
        const fallbackNFTs = [
          {
            id: "0",
            name: "Conservative Trader #0",
            owner: "0x792B...0894",
            personality: {
              riskProfile: "Conservative",
              tradingFrequency: "Low",
              winRate: 78,
            },
            rentalInfo: {
              price: 0.3,
              duration: "30 days",
              available: true,
            },
            image: "/nft-placeholder.svg",
            metadata: null,
          },
          {
            id: "1",
            name: "Balanced Strategist #1",
            owner: "0x792B...0894",
            personality: {
              riskProfile: "Balanced",
              tradingFrequency: "Medium",
              winRate: 75,
            },
            rentalInfo: {
              price: 0.5,
              duration: "30 days",
              available: false, // 设为已租用
            },
            image: "/nft-placeholder.svg",
            metadata: null,
          },
          {
            id: "2",
            name: "Aggressive Trader #2",
            owner: "0x792B...0894",
            personality: {
              riskProfile: "Aggressive",
              tradingFrequency: "High",
              winRate: 68,
            },
            rentalInfo: {
              price: 0.7,
              duration: "30 days",
              available: true,
            },
            image: "/nft-placeholder.svg",
            metadata: null,
          },
        ];

        setNfts(fallbackNFTs);
      } finally {
        setLoading(false);
      }
    };

    fetchNFTData();
  }, []);

  return { nfts, loading, error };
};

// 从元数据中提取人格特征的辅助函数
function extractPersonalityFromMetadata(metadata: NFTMetadata | null) {
  if (!metadata?.attributes) {
    return {
      riskProfile: "Unknown",
      tradingFrequency: "Unknown",
      winRate: Math.floor(Math.random() * 10 + 5),
    };
  }

  const riskProfile =
    metadata.attributes.find(
      (attr) =>
        attr.trait_type.toLowerCase().includes("risk") ||
        attr.trait_type.toLowerCase().includes("profile")
    )?.value || "Balanced";

  const tradingFrequency =
    metadata.attributes.find(
      (attr) =>
        attr.trait_type.toLowerCase().includes("frequency") ||
        attr.trait_type.toLowerCase().includes("trading")
    )?.value || "Medium";

  const winRate =
    metadata.attributes.find(
      (attr) =>
        attr.trait_type.toLowerCase().includes("win") ||
        attr.trait_type.toLowerCase().includes("rate")
    )?.value || Math.floor(Math.random() * 30 + 60); // 60-90% 随机胜率

  return {
    riskProfile: String(riskProfile),
    tradingFrequency: String(tradingFrequency),
    winRate: Number(winRate),
  };
}
