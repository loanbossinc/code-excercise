let express = require("express");
let app = express();
let cors = require("cors");
let bodyParser = require("body-parser");
let fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get("/me", (req, resp) => {
  fs.readFile("./data/user.json", "utf8", (err, data) => {
    if (err) {
      console.log("OH NO");
    }
    let userData = JSON.parse(data);
    fs.readFile("./data/jobfunction.json", "utf8", (err, data) => {
      if (err) {
        console.log("OH NO BUT JOB FUNCTION");
      }
      let jobFunctionData = JSON.parse(data);
      userData.jobFunction = jobFunctionData[userData.jobFunction];
      resp.send(userData);
      return;
    });
  });
});

app.get("/jobs", (req, resp) => {
  fs.readFile("./data/jobfunction.json", "utf8", (err, data) => {
    if (err) {
      console.log("OH NO");
    }
    let jobsData = JSON.parse(data);
    resp.send(jobsData);
    return;
  });
});

app.get("/states", (req, resp) => {
  fs.readFile("./data/states.json", "utf8", (err, data) => {
    if (err) {
      console.log("OH NO");
    }
    let states = JSON.parse(data);
    resp.send(states);
    return;
  });
});

app.post("/me/profile-update", (req, resp) => {
  let profileUpdate = req.body;
  console.log("profileUpdate: ", profileUpdate);

  fs.readFile("./data/user.json", "utf8", (err, data) => {
    if (err) {
      console.log("OH NO");
    }
    let userData = JSON.parse(data);
    userData.user.firstName = profileUpdate.firstName;
    userData.user.lastName = profileUpdate.lastName;
    userData.user.title = profileUpdate.title;
    userData.user.jobFunction = profileUpdate.jobFunction;

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
    let userData = JSON.parse(data);
    fs.readFile("./data/states.json", "utf8", (err, data) => {
      if (err) {
        console.log("OH NO BUT JOB FUNCTION");
      }
      let statesData = JSON.parse(data);
      userData.statesList = statesData;
      resp.send(userData);
      return;
    });
  });
});

app.get("/me/profile-update", (req, resp) => {
  fs.readFile("./data/user.json", "utf8", (err, data) => {
    if (err) {
      console.log("OH NO");
    }
    let userData = JSON.parse(data);
    fs.readFile("./data/jobfunction.json", "utf8", (err, data) => {
      if (err) {
        console.log("OH NO BUT JOB FUNCTION");
      }
      let jobFunctionData = JSON.parse(data);
      jobFunctionData = Object.keys(jobFunctionData).map(val => {
        return {
          value: val,
          label: jobFunctionData[val]
        };
      });
      jobFunctionData.sort();
      userData.jobfunctionList = jobFunctionData;
      resp.send(userData);
      return;
    });
  });
});

app.post("/me/contact-update", (req, resp) => {
  let contactUpdate = req.body;
  fs.readFile("./data/user.json", "utf8", (err, data) => {
    if (err) {
      console.log("OH NO");
    }
    let userData = JSON.parse(data);

    userData.user.firstName = contactUpdate.firstName;
    userData.user.lastName = contactUpdate.lastName;
    userData.user.title = contactUpdate.title;
    userData.user.jobFunction = contactUpdate.jobFunction;
    userData.user.state = contactUpdate.state;
    userData.user.city = contactUpdate.city;
    userData.user.zipcode = contactUpdate.zipcode;
    userData.user.street = contactUpdate.street;
    userData.user.phone = contactUpdate.phone;

    fs.writeFile("./data/user.json", JSON.stringify(userData), err => {
      if (err) console.log(err);
      resp.send("{}");
    });
  });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
