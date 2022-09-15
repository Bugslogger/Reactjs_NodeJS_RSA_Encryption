import app from "express";
import color from "colors";
import bodyparser from "body-parser";
import { DecryptData } from "./DecryptData.js";

const PORT = 9090;
let getData = {};

const express = app();

express.use(bodyparser.urlencoded({ extended: true }));
express.use(bodyparser.json());
express.use(bodyparser.raw());

express.post("/encrypt", (req, res) => {
  res.send({ status: "success" });
  console.log(req.body);
  getData = req.body;
  return;
});

express.get("/dcrypt", (req, res) => {
    console.log(getData,"object");
  if (!getData.hasOwnProperty("name")) {
    console.log("somthing went wrrong", getData);
  res.send({ status: "failed" });

    return;
  }

  let dcryptedData = DecryptData(getData.name);

  res.send({ name: dcryptedData });
});

express.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`.cyan);
});
