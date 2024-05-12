import dotenv from "dotenv";
import { getKeypairFromEnvironment,  } from "@solana-developers/helpers";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Connection, PublicKey } from "@solana/web3.js";
dotenv.config();

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);

console.log(" pubkey " + keypair.publicKey);
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const bal = await connection.getBalance(keypair.publicKey);
const balance = bal / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${keypair.publicKey} is ${balance}!`
);