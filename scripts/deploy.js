(async () => {
    try {
        const Spacebear = await hre.ethers.getContractFactory("Spacebear");
        const instance = await Spacebear.deploy();
        await instance.deployed();

        console.log(`Deploy contract at ${instance.address}`);
    } catch(e) {
        console.error(e);
        process.exitCode = 1;
    }
})()