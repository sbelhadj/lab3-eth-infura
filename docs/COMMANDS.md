# 🛠 **Quick Reference: CLI Commands for Sepolia**

## Get Latest Block Number
```bash
curl -s -X POST https://sepolia.infura.io/v3/YOUR_PROJECT_ID \
     -H "Content-Type: application/json" \
     --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' | \
     jq -r '.result | ltrimstr("0x")' | \
     awk '{printf "ibase=16; %s\n", toupper($0)}' | bc
```

## Check ETH Balance
```bash
curl -s -X POST https://sepolia.infura.io/v3/YOUR_PROJECT_ID \
     -H "Content-Type: application/json" \
     --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["YOUR_WALLET_ADDRESS", "latest"],"id":1}' | \
     jq -r '.result | ltrimstr("0x")' | \
     awk '{printf "ibase=16; %s\n", toupper($0)}' | bc | \
     awk '{print $1 / 10^18}'
```

## Get Gas Price (in Gwei)
``` bash
curl -s -X POST https://sepolia.infura.io/v3/YOUR_PROJECT_ID \
     -H "Content-Type: application/json" \
     --data '{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":1}' | \
     jq -r '.result | ltrimstr("0x")' | \
     awk '{printf "ibase=16; %s\n", toupper($0)}' | bc | \
     awk '{print $1 / 10^9}'
```

## Get Transaction Count (Nonce)
```bash
curl -s -X POST https://sepolia.infura.io/v3/YOUR_PROJECT_ID \
     -H "Content-Type: application/json" \
     --data '{"jsonrpc":"2.0","method":"eth_getTransactionCount","params":["YOUR_WALLET_ADDRESS", "latest"],"id":1}' | \
     jq -r '.result | ltrimstr("0x")' | \
     awk '{printf "ibase=16; %s\n", toupper($0)}' | bc
```

## Get Transaction Details
```bash
curl -s -X POST https://sepolia.infura.io/v3/YOUR_PROJECT_ID \
     -H "Content-Type: application/json" \
     --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["YOUR_TX_HASH"],"id":1}' | jq
```

## Read Data from a Smart Contract
```bash
curl -s -X POST https://sepolia.infura.io/v3/YOUR_PROJECT_ID \
     -H "Content-Type: application/json" \
     --data '{"jsonrpc":"2.0","method":"eth_call","params":[{"to": "0xContractAddressHere", "data": "0xFunctionSignatureHere"}, "latest"],"id":1}' | jq -r '.result'
```

## Track Transactions on Etherscan
```bash
curl -X GET "https://api-sepolia.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=<YOUR_TX_HASH>&apikey=<YOUR_API_KEY>"
```

🎯 Command Reference Complete!
✅ Use these commands to interact with Sepolia testnet in real-time
✅ For JavaScript automation, check scripts/ folder

💡 Modify the commands & scripts to experiment further!
