let express = require("express");
let app = express();
let cors = require("cors");
let fs = require('fs');

app.use(cors());

app.get("/me", (req, resp) => {
    fs.readFile("./data/user.json", 'utf8', (err, data) => {
        if(err) {
            console.log("OH NO");
        }
        let userData = JSON.parse(data);
        fs.readFile("./data/jobfunction.json", 'utf8', (err,data) => {
            if(err) {
                console.log("OH NO BUT JOB FUNCTION");
            }
            let jobFunctionData = JSON.parse(data);
            userData.jobFunction = jobFunctionData[userData.jobFunction];
            resp.send(userData);
            return;
        });
    });
});

app.post("/me", (req, resp) => {

});

app.listen(8080, () => {
 console.log("Server running on port 8080");
});