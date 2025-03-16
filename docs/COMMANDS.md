# 🛠 **Quick Reference: CLI Commands for Sepolia**

## Get Latest Block Number**
```bash
curl -s -X POST https://sepolia.infura.io/v3/YOUR_PROJECT_ID \
     -H "Content-Type: application/json" \
     --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' | \
     jq -r '.result | ltrimstr("0x")' | \
     awk '{printf "ibase=16; %s\n", toupper($0)}' | bc

