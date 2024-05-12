import { Transaction,sendAndConfirmTransaction, PublicKey,SystemProgram,Connection } from "@solana/web3.js";
import dotenv from "dotenv";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Keypair } from "@solana/web3.js";

dotenv.config();
// const suppliedToPubKey= process.argv[2] || null;
// const kwy =  Keypair.generate();

// console.log(kwy.publicKey);

// if(!suppliedToPubKey){
//     console.log("Please supply a public key to send to");
//     process.exit(1);
// }
const sendKeyPair= getKeypairFromEnvironment("SECRET_KEY");
// console.log(`supplied to pubkey :  ${suppliedToPubKey}`)

// const toPubKey= new PublicKey(suppliedToPubKey)

 const toPubKey = new PublicKey("DuxN4tZdbz2eyfWkcC7sMnMxDBpL8kfa6ymnEF8mAGdN")
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
console.log(
    `✅ Loaded our own keypair, the destination public key, and connected to Solana`
  );

  const transaction = new Transaction();
  const LAMPORTS_TO_SEND= 500;


  const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: sendKeyPair.publicKey,
    toPubkey: toPubKey,
    lamports: LAMPORTS_TO_SEND
  })

  transaction.add(sendSolInstruction);
try {
    const signature = await  sendAndConfirmTransaction(connection,transaction,[sendKeyPair])
  console.log(
    `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubKey}. `
  );
  console.log(`Transaction signature is ${signature}!`);
} catch (error) {
    console.error('Error:', error);
    process.exit(1);
}
