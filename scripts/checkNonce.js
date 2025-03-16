const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);

async function getNonce(address) {
    const nonce = await provider.getTransactionCount(address);
    console.log(`Nonce (Transaction Count) for ${address}: ${nonce}`);
}

getNonce("0xYourWalletAddressHere");
