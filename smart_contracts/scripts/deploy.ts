// import { ethers } from "ethers";
import { ethers, network,run } from "hardhat";


async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(
        "Deploying contracts with the account:",
        await deployer.getAddress()
    );

    // const ContractFactory = await ethers.getContractFactory("Personality");
    // console.log("Deploying contract...");
    // const contract = await ContractFactory.deploy();
    // await contract.waitForDeployment();

    // const Account = await ethers.deployContract("ERC6551Account");
    // const account = await Account.waitForDeployment();

    // const Registry = await ethers.deployContract("ERC6551Registry");
    // const registry = await Registry.waitForDeployment();

    // console.log("PFAI contract deployed at:", await contract.getAddress());
    // console.log("Account contract deployed at:", await account.getAddress());
    // console.log("Registry contract deployed at:", await registry.getAddress());

    // const transaction = await RegistryContract.createAccount(implementationAddress, chainId, nftTokenContract.target, tokenId, salt, initData);

    // PFAI contract deployed at: 0x5FbDB2315678afecb367f032d93F642f64180aa3
    // Account contract deployed at: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
    // Registry contract deployed at: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0

    if (network.name !== "hardhat") {
        try {
            console.log("Start verifying contract");

            // let contractPath = `contracts/${contractName}.sol:${contractName}`;

            await run("verify:verify", {
                address: "0x7016Ed86CEc2b579819066e03cBe611643B73BDA",
                // contract: contractPath,
            });
        } catch (error) {
            console.error(`Failed to verify contract: ${error}`);
        }
    }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});