import React from "react";

const Info = () => {
  return (
    <div style={{ width: "100%", padding: "0 1em", textAlign: "" }}>
      <p className="info-text">
        To generate public key and private key use the command line given below.
        or visit to the official website to geenerate private and public key{" "}
        <a href="http://travistidwell.com/jsencrypt/demo/">click here</a>.
        <br/>
        or just click on <span style={{color:"green"}}> GENERATE KEY</span> button to generate Private and Public Key for you.
      </p>
    </div>
  );
};

export default Info;
