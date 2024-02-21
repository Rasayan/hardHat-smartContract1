require("@nomicfoundation/hardhat-toolbox");
const hre = require("hardhat");

task("block-number", "Prints the current block number").setAction(
  async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`Block Number  --  ${blockNumber}`);
  }
);

module.exports = {};
