import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    localhost: {
      url: "http://localhost:8545"
    },
    bscTestnet: {
      url: process.env.BNBTest_URL || "",
      accounts: process.env.BNBTest_PRIVATE_KEY !== undefined ? [process.env.BNBTest_PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_V2_API_KEY || ""
  }
};

export default config;
