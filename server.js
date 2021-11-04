const express = require("express");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.post("/me/profile-update", (req, resp) => {
  const profileUpdate = req.body;
  fs.readFile("./data/user.json", "utf8", (err, data) => {
    if (err) {
      console.log("OH NO");
    }
    const userData = JSON.parse(data);
    userData.firstName = profileUpdate.firstName;
    userData.lastName = profileUpdate.lastName;
    userData.title = profileUpdate.title;
    userData.jobFunction = profileUpdate.jobFunction;

    fs.writeFile("./data/user.json", JSON.stringify(userData), err => {
      if (err) console.log(err);
      resp.send("{}");
    });
  });
});

app.get("/me/contact-update", (req, resp) => {
  fs.readFile("./data/user.json", "utf8", (err, data) => {
    if (err) {
      console.log("OH NO");
    }
    const userData = JSON.parse(data);
    fs.readFile("./data/states.json", "utf8", (err, data) => {
      if (err) {
        console.log("OH NO BUT JOB FUNCTION");
      }
      const statesData = JSON.parse(data);
      userData.statesList = statesData;
      resp.send(userData);
    });
  });
});

app.get("/me/profile-update", (req, resp) => {
  fs.readFile("./data/user.json", "utf8", (err, data) => {
    if (err) {
      console.log("OH NO");
    }
    const userData = JSON.parse(data);
    fs.readFile("./data/jobfunction.json", "utf8", (err, data) => {
      if (err) {
        console.log("OH NO BUT JOB FUNCTION");
      }
      let jobFunctionData = JSON.parse(data);
      jobFunctionData = Object.keys(jobFunctionData).map(val => ({
        value: val,
        label: jobFunctionData[val]
      }));
      jobFunctionData.sort();
      userData.jobfunctionList = jobFunctionData;
      resp.send(userData);
    });
  });
});

app.post("/me/contact-update", (req, resp) => {
  const contactUpdate = req.body;
  fs.readFile("./data/user.json", "utf8", (err, data) => {
    if (err) {
      console.log("OH NO");
    }
    const userData = JSON.parse(data);

    userData.state = contactUpdate.state;
    userData.city = contactUpdate.city;
    userData.zipcode = contactUpdate.zipcode;
    userData.street = contactUpdate.street;
    userData.phone = contactUpdate.phone;

    fs.writeFile("./data/user.json", JSON.stringify(userData), err => {
      if (err) console.log(err);
      resp.send("{}");
    });
  });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
