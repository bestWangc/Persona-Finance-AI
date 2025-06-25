import { NextRequest, NextResponse } from "next/server";
import { createPublicClient, http } from "viem";
import { bscTestnet } from "viem/chains";

// 创建公共客户端连接到 BSC 测试网
const publicClient = createPublicClient({
  chain: bscTestnet,
  transport: http(),
});

// 合约 ABI
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
] as const;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tokenId = searchParams.get("tokenId");
    const contractAddress = searchParams.get("contractAddress");

    if (!tokenId || !contractAddress) {
      return NextResponse.json(
        { error: "Missing tokenId or contractAddress parameter" },
        { status: 400 }
      );
    }

    // 调用合约获取 tokenURI
    const tokenURI = await publicClient.readContract({
      address: contractAddress as `0x${string}`,
      abi: CONTRACT_ABI,
      functionName: "tokenURI",
      args: [BigInt(tokenId)],
    });

    // 调用合约获取 owner
    const owner = await publicClient.readContract({
      address: contractAddress as `0x${string}`,
      abi: CONTRACT_ABI,
      functionName: "ownerOf",
      args: [BigInt(tokenId)],
    });

    return NextResponse.json({
      tokenURI,
      owner,
      tokenId,
    });
  } catch (error) {
    console.error("Error fetching NFT data:", error);
    return NextResponse.json(
      { error: "Failed to fetch NFT data from contract" },
      { status: 500 }
    );
  }
}
