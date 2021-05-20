/*
    Based on code found at https://dev.to/flexdinesh/cache-busting-a-react-app-22lk.  -- Jonathan Byrne 01/23/2020
*/
const fs = require("fs");
const uuidv4 = require("uuid/v4");

const buildFingerprintJson = JSON.stringify({ buildFingerprint: uuidv4() });

fs.writeFile("./public/meta.json", buildFingerprintJson, "utf8", err => {
  if (err) {
    console.log("An error occured while writing build fingerprint");
    return console.log(err);
  }
  console.log("Build fingerprint file has been saved");
});

fs.writeFile("./src/meta.json", buildFingerprintJson, "utf8", err => {
  if (err) {
    console.log("An error occured while writing build fingerprint");
    return console.log(err);
  }  
  console.log("Build fingerprint file has been saved");
});
