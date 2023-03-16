const {expect} = require("chai");
const hre = require("hardhat");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");

describe("Spacebear", function() {
    async function deploySpacebearAndMintTokenFixture() {
        const Spacebear = await hre.ethers.getContractFactory("Spacebear");
        const instance = await Spacebear.deploy();
        const [owner, another] = await ethers.getSigners();
        await instance.safeMint(another.address);
        return {instance};
    }

    it("is possible to mint a token", async() => {
        const {instance} = await loadFixture(deploySpacebearAndMintTokenFixture);
        const [owner, another] = await ethers.getSigners();
        expect(await instance.ownerOf(0)).to.equal(another.address);
    })

    it("Fails to transfer tokens from the wrong address", async() => {
        const {instance} = await loadFixture(deploySpacebearAndMintTokenFixture);
        const [owner, another, notTheNFTOwner] = await ethers.getSigners();

        expect(await instance.ownerOf(0)).to.equal(another.address);
        await expect(instance.connect(notTheNFTOwner).transferFrom(another.address, notTheNFTOwner.address, 0))
        .to.be.revertedWith("ERC721: caller is not token owner or approved")
    })
})