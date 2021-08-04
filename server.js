let express = require("express");
let app = express();
let cors = require("cors");
let bodyParser = require("body-parser");
let fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get("/me", (req, resp) => {
    fs.readFile("./data/user.json", 'utf8', (err, data) => {
        if (err) {
            console.log("OH NO");
        }
        let userData = JSON.parse(data);
        // fs.readFile("./data/jobfunction.json", 'utf8', (err, data) => {
        //     if (err) {
        //         console.log("OH NO BUT JOB FUNCTION");
        //     }
        //     let jobFunctionData = JSON.parse(data);
        //     userData.jobFunction = jobFunctionData[userData.jobFunction];
        //     resp.send(userData);
        //     return;
        // });
        resp.send(userData);
        return;
    });
});

app.post("/me/profile-update", (req, resp) => {
    let profileUpdate = req.body;
    fs.readFile("./data/user.json", 'utf8', (err, data) => {
        if (err) {
            console.log("OH NO");
        }
        let userData = JSON.parse(data);
        userData.firstName = profileUpdate.firstName;
        userData.lastName = profileUpdate.lastName;
        userData.title = profileUpdate.title;
        userData.jobFunction = profileUpdate.jobFunction;
        fs.writeFile("./data/user.json", JSON.stringify(userData), (err) => {
            if (err) console.log(err);
            resp.send(userData);
        });
    });
});

app.get("/me/contact-update", (req, resp) => {
    fs.readFile("./data/user.json", 'utf8', (err, data) => {
        if (err) {
            console.log("OH NO");
        }
        let userData = JSON.parse(data);
        fs.readFile("./data/states.json", 'utf8', (err, data) => {
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
    fs.readFile("./data/user.json", 'utf8', (err, data) => {
        if (err) {
            console.log("OH NO");
        }
        let userData = JSON.parse(data);
        fs.readFile("./data/jobfunction.json", 'utf8', (err, data) => {
            if (err) {
                console.log("OH NO BUT JOB FUNCTION");
            }
            let jobFunctionData = JSON.parse(data);
            jobFunctionData = Object.keys(jobFunctionData).map((val) => {
                return {
                    value: val,
                    label: jobFunctionData[val]
                }
            });
            jobFunctionData.sort();
            userData.jobfunctionList = jobFunctionData;
            resp.send(userData);
            return;
        });
    });
})

app.post("/me/contact-update", (req, resp) => {
    let contactUpdate = req.body;
    fs.readFile("./data/user.json", 'utf8', (err, data) => {
        if (err) {
            console.log("OH NO");
        }
        let userData = JSON.parse(data);
        // Decided to let the email be editable initially
        if (!userData.email) userData.email = contactUpdate.email
        userData.state = contactUpdate.state;
        userData.city = contactUpdate.city;
        userData.zipcode = contactUpdate.zipcode;
        userData.street = contactUpdate.street;
        userData.phone = contactUpdate.phone;

        fs.writeFile("./data/user.json", JSON.stringify(userData), (err) => {
            if (err) console.log(err);
            resp.send(userData);
        });
    });
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});