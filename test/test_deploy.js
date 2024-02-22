const { ethers } = require("hardhat");
const { assert } = require("chai");

describe("SimpleStorage", () => {
  let SimpleStorageFactory, SimpleStorage;
  beforeEach(async () => {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    SimpleStorage = await SimpleStorageFactory.deploy();
  });

  it("Should start with a favourite number of 0", async () => {
    const currentVal = await SimpleStorage.retrieve();
    const expectedVal = "0";

    assert.equal(currentVal.toString(), expectedVal);
  });

  it("Should return same number on initial store  and retrieve", async () => {
    await SimpleStorage.store("7");
    const updatedVal = await SimpleStorage.retrieve();
    const expectedVal = "7";

    assert.equal(updatedVal.toString(), expectedVal);
  });
});
