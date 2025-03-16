const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);

async function getGasPrice() {
    const gasPrice = await provider.getGasPrice();
    console.log(`Current Gas Price: ${ethers.formatUnits(gasPrice, "gwei")} Gwei`);
}

getGasPrice();
