// import { ethers } from "ethers";
import { ethers } from "hardhat";


async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(
        "Deploying contracts with the account:",
        await deployer.getAddress()
    );

    const baseURI = ""

    const ContractFactory = await ethers.getContractFactory("Personality");
    console.log("Deploying contract...");
    const contract = await ContractFactory.deploy(baseURI);
    await contract.waitForDeployment();

    const Account = await ethers.deployContract("ERC6551Account");
    const account = await Account.waitForDeployment();

    const Registry = await ethers.deployContract("ERC6551Registry");
    const registry = await Registry.waitForDeployment();

    console.log("PFAI contract deployed at:", await contract.getAddress());
    console.log("Account contract deployed at:", await account.getAddress());
    console.log("Registry contract deployed at:", await registry.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});