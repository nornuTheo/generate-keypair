import { Connection, PublicKey, LAMPORTS_PER_SOL, Keypair, } from '@solana/web3.js';
import { airdropIfRequired } from '@solana-developers/helpers';
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
      console.log(`⚠️Account info not available for address ${pubkey}.`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

//  the wallet addresses to check
const walletsToCheckonMainnet = ['86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY', 'gacMrsrxNisAhCfgsUAVbwmTC3w9nJB6NychLAnTQFv', 'JCZjJcmuWidrj5DwuJBxwqHx7zRfiBAp6nCLq3zYmBxd'];
// const walletsToCheckonDevnet : string[] = [];

// for(let i = 0; i < 4; i++){
//    const account =  Keypair.generate();
//    const pubkey = walletsToCheckonDevnet.push(account.publicKey.toString());
//    const deposit = await airdropIfRequired(connection,
//     account.publicKey,
//     1 * LAMPORTS_PER_SOL * 1000000000,
//     0.5 * LAMPORTS_PER_SOL,
// );

// }

// Check the balances for the specified wallets
// walletsToCheckonDevnet.forEach((walletAddress) => {
//   checkWalletBalance(walletAddress);
// });
walletsToCheckonMainnet.forEach((walletAddress) => {
  checkWalletBalance(walletAddress);
});