const { ethers } = require("hardhat");
const { assert } = require("chai");

describe("SimpleStorage", () => {
  let SimpleStorageFactory, SimpleStorage;
  this.beforeEach(async () => {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    SimpleStorage = await SimpleStorageFactory.deploy();
  });

  it("Should start with a favourite number of 0", async () => {
    const currentVal = await SimpleStorage.retrieve();
    const expectedVal = "0";

    assert.equal(currentVal.toString(), expectedVal);
  });
});
