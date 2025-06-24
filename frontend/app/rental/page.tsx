import { getCachedNFTData } from '../lib/nft-service';
import RentalClient from './RentalClient';

// 启用静态生成和增量静态再生
export const revalidate = 300; // 5 minutes

// 生成页面元数据
export const metadata = {
  title: 'NFT Rental Marketplace - PFAI',
  description: 'Rent trading personalities to enhance your DeFi strategies. Each NFT contains unique trading behaviors and risk profiles.',
};

export default async function RentalPage() {
  // 在服务器端获取缓存的 NFT 数据
  const nfts = await getCachedNFTData();

  return <RentalClient initialNfts={nfts} />;
}
