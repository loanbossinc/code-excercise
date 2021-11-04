const express = require("express");

const app = express();
const cors = require("cors");
const fs = require("fs");

app.use(cors());

app.get("/me", (req, resp) => {
  fs.readFile("./data/user.json", "utf8", (err, data) => {
    if (err) {
      console.log("OH NO");
    }
    const userData = JSON.parse(data);
    fs.readFile("./data/jobfunction.json", "utf8", (err, data) => {
      if (err) {
        console.log("OH NO BUT JOB FUNCTION");
      }
      const jobFunctionData = JSON.parse(data);
      userData.jobFunction = jobFunctionData[userData.jobFunction];
      resp.send(userData);
    });
  });
});

app.post("/me", (req, resp) => {});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
