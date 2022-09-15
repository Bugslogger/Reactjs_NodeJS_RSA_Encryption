import { generateKeyPair } from "crypto";

export const GenerateKeys = () => {
  // The `generateKeyPairSync` method accepts two arguments:
  // 1. The type ok keys we want, which in this case is "rsa"
  // 2. An object with the properties of the key
  //   const Keys = generateKeyPairSync("rsa", {
  //     // The standard secure default length for RSA keys is 2048 bits
  //     modulusLength: 4096,
  //     //   publicKeyEncoding: {
  //     //     type: 'spki',
  //     //     format: 'pem'
  //     //   },
  //     //   privateKeyEncoding: {
  //     //     type: 'pkcs8',
  //     //     format: 'pem',
  //     //     cipher: 'aes-256-cbc',
  //     //     passphrase: 'top secret'
  //     //   }
  //   },);

  //   console.log(publicKey);
  //   console.log(privateKey);

  //   console.log(Keys);

  // use the public and private keys
  // ...

  generateKeyPair(
    "rsa",
    {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: "spki",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
        cipher: "aes-256-cbc",
        passphrase: "top secret",
      },
    },
    (err, publicKey, privateKey) => {
      // Handle errors and use the generated key pair.
      console.log("Error: ", err);
      console.log("public key: ", publicKey);
      console.log("private key: ", privateKey);
    }
  );
};
