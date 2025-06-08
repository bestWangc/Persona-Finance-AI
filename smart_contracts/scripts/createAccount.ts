import { ethers } from "hardhat";


async function main() {
    const ERC6551REGISTRY_ADDRESS = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
    const ERC6551ACOUNT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"

    const Registry = await ethers.getContractFactory("ERC6551Registry");
    const registry = await Registry.attach(ERC6551REGISTRY_ADDRESS);

    //update salt for a more secure hash
    const salt = 0;
    const implementation = ERC6551ACOUNT_ADDRESS
    const tokenAddress = process.env.PFAI_ADDRESS || "";
    if (!tokenAddress) {
        console.error("PFAI_ADDRESS not set");
        process.exit(1);
    }

    const tokenId = 0
    const chainID = 97; //bsc testnet
    const initData = "0x";

    const tx = await registry.createAccount(implementation, chainID, tokenAddress, tokenId, salt, initData);
    const receipt = await tx.wait();
    const address = await registry.account(implementation, chainID, tokenAddress, tokenId, salt)

    if (receipt.status == 1 && address) {
        console.log("Account created successfully at address: ", address);
    } else {
        console.log("Account creation failed");
    }
}


main().catch((error) => {
    console.error(error);
    process.exit(1);
});