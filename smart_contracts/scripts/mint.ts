import { ethers } from "hardhat";
import PFABI from "../artifacts/contracts/Personality.sol/Personality.json";

async function main() {

    const [deployer] = await ethers.getSigners();
    console.log(
        "Deploying contracts with the account:",
        await deployer.getAddress()
    );

    console.log("ethers version:", ethers.version);
    //mint ERC-721 NFT
    // Get the contract instance
    const contractAddress = process.env.PST_ADDRESS || "";
    if (!contractAddress) {
        console.error("PST_ADDRESS not set");
        process.exit(1);
    }
    const personal = new ethers.Contract(contractAddress, PFABI.abi, deployer);

    const tokenId = await personal.nextId()
    //need to add the baseURI
    const baseURI = ""

    // const to = process.env.WALLET_ADDRESS
    const to = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
    // Mint token
    const tx = await personal.safeMint(to, baseURI);
    // Wait for the transaction to be mined
    const receipt = await tx.wait();

    // Log the transaction details
    console.log("Transaction hash:", receipt.hash);
    console.log("Gas used:", receipt.cumulativeGasUsed);

    // Check if the transaction was successful (status 1)
    if (receipt.status === 1) {
        // const tokenId = await tx.nextId()
        console.log(`Transaction was successful. Token ${tokenId}  minted to ${to}`);
    } else {
        console.log("Transaction failed.");
    }

    //Create the TBA(Token Bound Account)



}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});