// import { JSEncrypt } from "jsencrypt";
// import { key } from "./config.json";
import crypto from "crypto";

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----`


// export const DecryptData = async (DataToDecrypt) => {
//   let dcrypt = new JSEncrypt();
//   dcrypt.setPrivateKey(key);
//   return dcrypt.decrypt(DataToDecrypt);
// };

export function DecryptData(DataToDecrypt) {
  if (!DataToDecrypt) {
    return "make an post request before getting somthing from server";
  }

  //   const rsaPrivateKey = {
  //     key: privateKey,
  //     oaepHash: "SHA256",
  //     padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
  //   };

  const decryptedMessage = crypto.privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_PADDING,
    //   oaepHash: "",
    //   passphrase: " ",
    },
    Buffer.from(DataToDecrypt, "base64")
  );

  return decryptedMessage.toString("base64url");
}
