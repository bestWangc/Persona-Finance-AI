import { useContractWrite, useContractRead, useTransaction } from "wagmi";
import { parseEther } from "viem";
import { useState, useEffect } from "react";

// 租赁合约 ABI
const RENTAL_CONTRACT_ABI = [
  {
    inputs: [
      { name: "nftId", type: "uint256" },
      { name: "duration", type: "uint256" },
    ],
    name: "rentNFT",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ name: "nftId", type: "uint256" }],
    name: "getRentalStatus",
    outputs: [
      { name: "isRented", type: "bool" },
      { name: "renter", type: "address" },
      { name: "endTime", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

// 合约地址 - 需要替换为实际部署的合约地址
const RENTAL_CONTRACT_ADDRESS = "0x...";

export function useRentalContract() {
  const [rentalStatuses, setRentalStatuses] = useState<Record<string, boolean>>(
    {}
  );

  // 租赁 NFT
  const { writeContract, data: rentData } = useContractWrite({
    address: RENTAL_CONTRACT_ADDRESS as `0x${string}`,
    abi: RENTAL_CONTRACT_ABI,
    functionName: "rentNFT",
    args: [BigInt(0), BigInt(0)], // 默认参数
  });

  // 等待交易确认
  const { isLoading: isRenting, isSuccess: isRentSuccess } = useTransaction({
    hash: rentData as `0x${string}`,
  });

  // 获取租赁状态
  const { data: rentalStatus, refetch: refetchRentalStatus } = useContractRead({
    address: RENTAL_CONTRACT_ADDRESS as `0x${string}`,
    abi: RENTAL_CONTRACT_ABI,
    functionName: "getRentalStatus",
    args: [BigInt(0)], // 默认参数
  });

  // 处理租赁请求
  const handleRent = async (nftId: string, price: number, duration: number) => {
    try {
      await writeContract({
        args: [BigInt(nftId), BigInt(duration)],
        value: parseEther(price.toString()),
      });
    } catch (error) {
      console.error("Rental failed:", error);
      throw error;
    }
  };

  // 更新租赁状态
  const updateRentalStatus = async (nftId: string) => {
    try {
      const status = await refetchRentalStatus();
      setRentalStatuses((prev) => ({
        ...prev,
        [nftId]: status.data?.[0] || false,
      }));
    } catch (error) {
      console.error("Failed to update rental status:", error);
    }
  };

  // 定期更新租赁状态
  useEffect(() => {
    const interval = setInterval(() => {
      Object.keys(rentalStatuses).forEach((nftId) => {
        updateRentalStatus(nftId);
      });
    }, 30000); // 每30秒更新一次

    return () => clearInterval(interval);
  }, [rentalStatuses]);

  return {
    handleRent,
    isRenting,
    isRentSuccess,
    rentalStatuses,
    updateRentalStatus,
  };
}
