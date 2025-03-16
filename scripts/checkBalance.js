require("dotenv").config();
const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);

async function checkBalance() {
    const address = "0xYourWalletAddressHere";  // Replace with your Sepolia address
    const balance = await provider.getBalance(address);
    console.log(`Balance of ${address}: ${ethers.formatEther(balance)} ETH`);
}

checkBalance();
