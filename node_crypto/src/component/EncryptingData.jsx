import React from "react";
import { useState } from "react";
import { JSEncrypt } from "jsencrypt";
import { useEffect } from "react";
import crypto from "crypto";
// import { GenerateKeys } from "./Utilities/Functions";

const EncryptingData = () => {
  const [formData, setformData] = useState({});
  const [publicKey, setpublicKey] = useState("");
  const [privateKey, setprivateKey] = useState("");
  const [encryptedData, setencryptedData] = useState("");
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");

  const SendDataToServer = (e) => {
    e.preventDefault();
    /**
     * Encypting Data with public key
     */

    // console.log(formData.hasOwnProperty("dataEncrypt"), formData.dataEncrypt);
    if (
      formData.dataEncrypt === "undefined" ||
      !formData.hasOwnProperty("dataEncrypt")
    ) {
      seterror("please enter somthing for encryption");
      return;
    }

    if (!publicKey) {
      seterror("public key is required");
      return;
    }

    try {
      const encryptedData = crypto.publicEncrypt(
        {
          key: publicKey,
          padding: crypto.constants.RSA_PKCS1_PADDING,
          // oaepHash: "SHA256",
        },
        // We convert the data string to a buffer using `Buffer.from`
        Buffer.from(formData.dataEncrypt, "base64")
      );

      // The encrypted data is in the form of bytes, so we print it in base64 format
      // so that it's displayed in a more readable form
      // console.log("encypted data: ", encryptedData.toString("base64"));

      let encdata = encryptedData.toString("base64");
      console.log(encdata);
      seterror("");
      setencryptedData(encdata);
      setsuccess("encryption success...!!");
    } catch (error) {
      seterror("Something went wrong", error);
    }

    // let encrypt = new JSEncrypt();

    // if (!publicKey) {
    //   seterror("public key is required");
    //   return;
    // }
    // try {
    //   encrypt.setPublicKey(publicKey);
    //   let encdata = encrypt.encrypt(formData.dataEncrypt);
    //   seterror("");
    //   setencryptedData(encdata);
    //   setsuccess("encryption success...!!");
    // } catch (error) {
    //   seterror("Something went wrong");
    // }
  };

  return (
    <div className="encryption-4096-bit">
      <h2>RSA Data Encryption </h2>
      <div style={{ width: "100%" }}>
        <form onSubmit={SendDataToServer}>
          <input
            type="text"
            name="dataEncrypt"
            autoComplete="off"
            onChange={(e) => setformData({ [e.target.name]: e.target.value })}
            placeholder="enter some data here. your data will be encrypted"
          />
          <input type="submit" value={"Encrypt Data"} />
        </form>
      </div>
      {/* <div className="key-generate-button">
        <button className="key-Gbtn" onClick={GenerateKeys}>
          Generate Key
        </button>
      </div> */}
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      {/* get public or prrivate key */}
      <div className="text-area-for-keys">
        <div className="text-area-label">
          <label htmlFor="public_key">ENTER YOU PUBLIC KEY</label>
          <textarea
            name="Public Key"
            id="private_key"
            cols="30"
            rows="10"
            onChange={(e) => {
              setpublicKey(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="text-area-label">
          <label htmlFor="public_key">ENTER YOUR PRIVATE KEY</label>
          <textarea
            name="Private Key"
            id="public_key"
            cols="30"
            disabled
            onChange={(e) => {
              setprivateKey(e.target.value);
            }}
            rows="10"
          ></textarea>
        </div>
      </div>
      <div className="show-encypted-data">{encryptedData}</div>
    </div>
  );
};

export default EncryptingData;

// -----BEGIN PUBLIC KEY-----
// MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAptRJkO0yVRuYUAdi/prf
// BuaWVhS5EUCLsOVH7q9oAg9G1Uf0mA5l0211dJq+xvhyUmv2ftJULzuFYsndlfCI
// aAM+h4+on36ev53QR0mBeWDZwdgkTFxSKuajI62ewJ4jUFVEKnkbTr63poRY02lH
// 0hH3+vErTJnd2pp2tnHJcst7cC6UadA/TXDCXX34Xz0pgCWtxcAh9JpD1iho707P
// Se9PBXnVBPQOKZmKGiUfNy2xw52CKOxgRkh9FvaAn2BBDbtSBtnXi+9CVpE7X/zv
// oNn7DQc1DmmUZD6x5bd9nBoogS4b9BuY8cWM9OOkI07Dah5K/vg/aGvtFjSqhrzT
// cwIDAQAB
// -----END PUBLIC KEY-----



// -----BEGIN PUBLIC KEY-----
// MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAwOmDU3JF0aHIKYumy+R6
// jY9POC92hKxWtoZ9iT9qiUFEPpSpPp/c9K3qlqat1ESLmDPoio0ykda5vV8xsBS7
// ybLRCOumpQq4C3e3W+ItsJwMadqud2OmtoAAj8zopTQZchRLa2MLN6OVrCKdlVVs
// EXusj9C7IiVcMrdwBWYM2eJW1fnabZaAJNSd1EYMivlN2Yv1W2Y9neq12pcJIIOJ
// OkuKphJJXXIK/jA6wMlnGuFR3SuC/GtPGOo19cW4j8PuJr9Wa6FwwoQ9hGljxC8M
// kKrPwRIfAAlqw8M52vW71EUYHZy8NAo9HTSjvcQHrRDk9Wo4VMETmzf4mIRPoish
// 6maPnGOar3UFD8PDQNE04CoutctIN8HdYfaWdqnukupghBlNLlYLaFCBS1wv9Q2o
// XGyiClBZrnSpZWL9ArP4MXIoFfQL5rac3uHxVebCbRJFzLqEArbScxFIZbQ6v3A9
// /DHVmcWS3iH7zXuhf46tntfIq9KzIJMY/qmonasoZ2J52/jQbEwy/4qScxO2vX1L
// gtcZuLR8CAVkotKQN0FvWoB3U8J7GI6bxO510pjRmP7o4L3A5sPUfRVJUvVTc16i
// 30smh0GABMRIGDzla8IVeBD/fr287thTZzVmRluM9BfhIL0Gc1+SDcDn+rsBaCaW
// 5WhqNxx1HtGiTbWCL4yPi/sCAwEAAQ==
// -----END PUBLIC KEY-----