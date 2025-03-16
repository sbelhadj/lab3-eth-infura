# 📖 Lab 3 Setup Guide: Interacting with Sepolia Testnet

## 🎯 **Objective**
This lab teaches students how to interact with Ethereum's **Sepolia Testnet** using:
- **CLI commands (cURL + jq + bc)**  
- **JavaScript scripting with ethers.js**  
- **Etherscan API**  
- **Smart contract interactions**  

✅ **No need to run a full Ethereum node!**  
✅ **Fast & real blockchain interactions**  
✅ **Works from any Ubuntu machine**  

---

## 🛠 **1️⃣ Prerequisites**
### ** Install Required Packages**
Run the following commands in the terminal:
```bash
sudo apt update && sudo apt install -y curl jq bc
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
npm install -g web3 ethers dotenv
```

## Verify installation:
```bash
node -v
npm -v
jq --version
```


## Configure Metamask for Sepolia
  Open Metamask → Go to Settings > Networks > Add Network
    Enter the following details:
      Network Name: Sepolia
      RPC URL: https://sepolia.infura.io/v3/YOUR_PROJECT_ID
      Chain ID: 11155111
      Currency: ETH
      Explorer: https://sepolia.etherscan.io/
    Save and switch to Sepolia network
    
## Get Sepolia Test ETH
🔗 Alchemy Sepolia Faucet (look in google)
🔗 Infura Sepolia Faucet (look in google)

## Install Dependencies
./install.sh


## Running CLI Commands
#### Check ETH balance

source .env
node scripts/checkBalance.js

#### Send ETH transaction
node scripts/sendEth.js

#### Check Sepolia gas price
node scripts/checkGasPrice.js

#### Get transaction count (nonce)
node scripts/checkNonce.js

#### Interact with a smart contract
node scripts/interactContract.js

## Track Transactions on Etherscan
#### Get an Etherscan API Key
Sign up: https://etherscan.io/myapikey

#### Check Transaction Status
curl -X GET "https://api-sepolia.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=<YOUR_TX_HASH>&apikey=<YOUR_API_KEY>"
✔️ If status: 1, the transaction is successful.

🎯 Lab Completed!
✅ You can now interact with Ethereum Sepolia testnet using CLI & JavaScript
✅ Try modifying scripts to interact with your own contracts!

💡 Need more help? Check docs/COMMANDS.md for CLI reference! 🚀🔥
