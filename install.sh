#!/bin/bash
echo "🚀 Installing dependencies..."

# Update system
sudo apt update && sudo apt install -y curl jq

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install Web3 tools
npm install -g web3 ethers dotenv

echo "✅ Installation complete!"
