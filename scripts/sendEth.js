
require("dotenv").config();
const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

async function sendTransaction() {
    const tx = {
        to: "0xRecipientAddressHere",
        value: ethers.parseEther("0.01"),
        gasLimit: "21000",
    };

    const txResponse = await wallet.sendTransaction(tx);
    console.log("Transaction Hash:", txResponse.hash);
}

sendTransaction();
