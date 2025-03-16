const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);

async function readContract() {
    const contractAddress = "0xYourSmartContractAddress";
    const abi = [
        "function myFunction() public view returns (uint256)"
    ];

    const contract = new ethers.Contract(contractAddress, abi, provider);
    const result = await contract.myFunction();
    console.log(`Contract Result: ${result}`);
}

readContract();
