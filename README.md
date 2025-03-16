# 🚀 Lab 3: Interacting with Sepolia Public Nodes

📦 lab3-eth-infura
 ├── 📂 scripts
 │    ├── checkBalance.js       # Query ETH balance
 │    ├── sendEth.js            # Send ETH transaction
 │    ├── checkGasPrice.js      # Query Sepolia gas price
 │    ├── checkNonce.js         # Get transaction count (nonce)
 │    ├── interactContract.js   # Read data from a smart contract
 │    ├── .env.example          # Template for private key storage
 │
 ├── 📂 docs
 │    ├── LAB3_SETUP.md         # Step-by-step guide for students
 │    ├── COMMANDS.md           # Quick reference CLI commands
 │
 ├── 📜 README.md               # Overview of the lab
 ├── 📜 install.sh              # Auto-installation script for dependencies
 ├── 📜 .gitignore              # Ignore unnecessary files
 ├── 📜 package.json            # Node.js dependencies
 ├── 📜 LICENSE                 # Open-source license


## 🎯 Overview
This lab teaches students how to interact with Ethereum's **Sepolia Testnet** using **public RPC nodes**, **CLI commands**, **JavaScript (ethers.js)**, and **Etherscan API**.

✅ **No need to sync a full node**  
✅ **Fast setup with real blockchain interactions**  
✅ **Works from any Ubuntu machine**  

## 📌 Topics Covered
1. 🌐 **Connecting Metamask to Sepolia**
2. 🔍 **Querying Blockchain Data (RPC Calls)**
3. 💰 **Checking ETH Balances**
4. 💸 **Sending Transactions via CLI**
5. 📡 **Tracking Transactions on Etherscan**
6. 📝 **Using API Calls for Blockchain Data**
7. 🔗 **Interacting with Smart Contracts**

## 🛠 Installation
chmod +x install.sh
./install.sh

source .env  # Load private key (modify .env.example)
node scripts/checkBalance.js
node scripts/sendEth.js

