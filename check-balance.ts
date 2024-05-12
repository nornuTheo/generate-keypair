import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const pubkey = new PublicKey("8NUJ77ymBkkyUYihaNLg32gV1x7Wby98MDuoAPEydJXe");
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
  try {
       
    const accountInfo = await connection.getAccountInfo(pubkey);
         if(accountInfo !== null) {    
            const balanceLamport = await connection.getBalance(pubkey);

            const balance = balanceLamport / LAMPORTS_PER_SOL;
            console.log(
        `💰 Finished! The balance for the wallet at address ${pubkey} is ${balance}!`
      
            );  
         }
         else{
            console.log("invalid wallet address ")
         }
       
   
 } catch (error) {
    // console.log("invalid wallet address ")
    console.log(error);
 }
 
 
            