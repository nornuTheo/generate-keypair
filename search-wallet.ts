import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

const connection = new Connection('https://api.mainnet-beta.solana.com');

async function checkWalletBalance(pubkey: string) {
  try {
    const walletAddress = new PublicKey(pubkey);

    const accountInfo = await connection.getAccountInfo(walletAddress);
    if (accountInfo !== null) {
      const balanceLamport = await connection.getBalance(walletAddress);
      const balance = balanceLamport / LAMPORTS_PER_SOL;
      console.log(`💰 Finished! The balance for the wallet at address ${pubkey} is ${balance} SOL!`);
    } else {
      console.log(`⚠️ Account info not available for address ${pubkey}.`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Specify the wallet addresses to check
const walletsToCheck = ['toly.sol', 'shaq.sol', 'mccann.sol'];

// Check the balances for the specified wallets
walletsToCheck.forEach((walletAddress) => {
  checkWalletBalance(walletAddress);
});