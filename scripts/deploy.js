// const ethers = require("chai");

const { ethers, run, network } = require("hardhat");
require("@nomicfoundation/hardhat-verify");

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

  console.log("Deploying contract...........");

  const deployedContract = await SimpleStorageFactory.deploy();
  await deployedContract.getDeployedCode();

  console.log(`Contract deployed to ${await deployedContract.getAddress()}`);
  console.log("Done 1");

  // console.log(network.config);

  // if (network.config.chainId === 11155111 && process.env.ETHSCAN_API_KEY) {
  //   await SimpleStorageFactory.getDeployTransaction().wait(6);
  //   await verify(SimpleStorageFactory.address, []);
  // }

  const contractStore = await deployedContract.store("5");
  await contractStore.wait(1);
  const currentFavNum = await deployedContract.retrieve();
  console.log(currentFavNum);
}

async function verify(contractAddress, args) {
  console.log("Verifying Contract !!");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified !");
    } else {
      console.log(e);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((er) => {
    console.log(er);
    process.exit(1);
  });
