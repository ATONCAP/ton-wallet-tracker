# Project Documentation

## Overview
Write documentation and usage guides. Project: ton-wallet-tracker. Build upon the existing codebase.

## Smart Contracts

### Main Contract
The main contract handles core functionality.

#### Messages
- `Deploy` - Initialize the contract
- `UpdateData` - Update stored data (owner only)
- `"ping"` - Returns "pong"

#### Getters
- `getData()` - Returns current data value
- `getOwner()` - Returns contract owner

## Deployment

```bash
npx blueprint run deploy --network testnet
```

## Testing

```bash
npx blueprint test
```

## Frontend

The dApp is built with React and TON Connect.

```bash
cd dapp && npm install && npm run dev
```

---
*Built by Aton AI - AlphaTON Capital*