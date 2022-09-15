import React from "react";

const CommandLine = () => {
  return (
    <div className="commandline">
      <span>
        command line to generate private key. private key is used on server side
        for decryption of data
      </span>
      <code>openssl genrsa -out rsa_1024_priv.pem 1024</code>
      <span>
        command line to generate public key. public key is used on client side
        for encryption of data.
      </span>
      <code>openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem</code>
    </div>
  );
};

export default CommandLine;
