import React, { useEffect, useState } from "react";
import ViewOnlyField from "components/Global/Fields/ViewOnlyField";
import { Link } from "react-router-dom";
import { TextField } from '@material-ui/core';
import './index.css';   

const UserProfileEdit = () => {
    
    const [user, setUser] = useState({
        "firstName": "",
        "lastName": "",
        "jobTitle": "",
        "jobFunction": "",
        "email": "",
        "phone": "",
        "address": ""
    });
    const [jobs, setJobs] = useState([]);
    const [fn, setFn] = useState("");
    const [ln, setLn] = useState("");
    const [title, setTitle] = useState("");
    const [func, setFunc] = useState("");

    useEffect(() => {
        getUser();
        getJobs();
    }, []);

    async function getUser() {
        //! Would check for prod URL in a real project. And probably a .env file
        const url = "http://localhost:8080/me"; 

        const response = await fetch(url).then(blob => blob.json()).then(data => data);
        console.log('response: ', response);
        
        setFn(response.user.firstName);
        setLn(response.user.lastName);
        setTitle(response.user.jobTitle);
        setFunc(response.user.jobFunction);

        setUser(response.user);
    }

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    
    async function getJobs() {
        //! Would check for prod URL in a real project. And probably a .env file
        const url = "http://localhost:8080/jobs"; 

        const response = await fetch(url)
            .then(blob => blob.json())
            .then(data => data);

        console.log('response: ', response);

        let functions = response.jobFunctions.map(x => x.function);

        functions = functions.filter(onlyUnique);

        console.log(functions);
        setJobs(functions);
    }

    const getCurrentValues = () => {
        return {
            "firstName": fn,
            "lastName": ln,
            "jobTitle": title,
            "jobFunction": func,
        }
    }

    async function updateUser(event) {
        event.persist();

        // //! Would check for prod URL in a real project. And probably a .env file
        const url = "http://localhost:8080/me/profile-update"; 

        const response = await fetch(url, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(getCurrentValues())}).then(blob => blob.json()).then(data => data);
        console.log('response: ', response);
    }

    const handleFNChange = (event) => {
        event.persist();
        setFn(event?.target?.value);
    }

    const handleLNChange = (event) => {
        event.persist();
        setLn(event?.target?.value);
    }

    const handleTitleChange = (event) => {
        event.persist();
        setTitle(event?.target?.value);
    }

    const handleFuncChange = (event) => {
        event.persist();
        setFunc(event?.target?.value);
    }

    return (
        <div className="profile-edit-main-wrapper">
            <div className="top-bg-img"></div>
            <div className="left-col">

                <div className="info-container personal-info-div">
                    <form id="personal-info-form">
                        <div className="field-wrapper two-items">
                            <ViewOnlyField bold={true} value={"Personal Information"} placeholder={"Placeholder"} mask={false}></ViewOnlyField>
                        </div>
                        <div className="field-wrapper two-items">
                            <TextField onChange={handleFNChange} variant="filled" label="First Name" value={fn}></TextField>
                            <TextField onChange={handleLNChange} variant="filled" label="Last Name" value={ln}></TextField>
                        </div>
                        <div className="field-wrapper two-items">
                            <TextField onChange={handleTitleChange} variant="filled" label="Title" value={title}></TextField>
                            <TextField onChange={handleFuncChange} style={{ width: '192px'}} select variant="filled" label="Function" value={func} >
                                {jobs.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </TextField>
                        </div>
                    </form>
                </div>
            </div>
            <div className="right-col">

                <div className="user-card">
                    <h3>{user.firstName + " " + user.lastName}</h3>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <button type="submit" form="personal-info-form" onClick={updateUser} className="card-buttons save-button">Save Changes</button>
                        <Link className="card-buttons cancel-button" to="/">Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfileEdit;