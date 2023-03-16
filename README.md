# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## configuration
There are some requirements for the project to work.<br>
We need to add 3 files which contain some private data.
These files need to be in the root project folder.
- .etherscan -> etherscan api key
- .infura -> infura api key
- .secret -> seed phrase (e.g. from metamask)
