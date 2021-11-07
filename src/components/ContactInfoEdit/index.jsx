import React, { useEffect, useState } from "react";
import ViewOnlyField from "components/Global/Fields/ViewOnlyField";
import { Link } from "react-router-dom";
import { TextField } from '@material-ui/core';
import './index.css';  

const ContactInfoEdit = () => {
    
    const [states, setStates] = useState([]);
    const [fn, setFn] = useState("");
    const [ln, setLn] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [title, setTitle] = useState("");
    const [func, setFunc] = useState("");

    useEffect(() => {
        getUser();
        getStates();
    }, []);

    async function getUser() {
        //! Would check for prod URL in a real project. And probably a .env file
        const url = "http://localhost:8080/me"; 

        const response = await fetch(url).then(blob => blob.json()).then(data => data);
        console.log('response: ', response);
        
        setStreet(response.user.street);
        setCity(response.user.city);
        setState(getState(response.user.state));
        setZip(response.user.zip);
        setEmail(response.user.email);
        setPhone(response.user.phone);
        setFn(response.user.firstName);
        setLn(response.user.lastName);
        setTitle(response.user.jobTitle);
        setFunc(response.user.jobFunction);
    }
    
    async function getStates() {
        //! Would check for prod URL in a real project. And probably a .env file
        const url = "http://localhost:8080/states"; 

        const response = await fetch(url)
            .then(blob => blob.json())
            .then(data => data);

        console.log('response: ', response);

        setStates(response);
    }

    const getCurrentValues = () => {
        return {
            "email": email,
            "phone": phone,
            "city": city,
            "street": street,
            "state": state,
            "zip": zip,
            "jobTitle": title,
            "jobFunction": func,
            "firstName": fn,
            "lastName": ln,
        }
    }

    async function updateUser(event) {
        event.persist();

        // //! Would check for prod URL in a real project. And probably a .env file
        const url = "http://localhost:8080/me/contact-update"; 

        const response = await fetch(url, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(getCurrentValues())}).then(blob => blob.json()).then(data => data);
        console.log('response: ', response);
    }

    function formatPhoneNumber(phoneNumberString) {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return null;
    }

    const handlePhoneChange = (event) => {
        event.persist();
        setPhone(formatPhoneNumber(event?.target?.value));
    }

    const handleCityChange = (event) => {
        event.persist();
        setCity(event?.target?.value);
    }

    const handleStreetChange = (event) => {
        event.persist();
        setStreet(event?.target?.value);
    }

    const handleStateChange = (event) => {
        event.persist();
        setState(event?.target?.value);
    }

    const handleZipChange = (event) => {
        event.persist();
        setZip(event?.target?.value);
    }

    const getState = () => {
        let st = states.slice();
        console.log('state param: ' + state);
        console.log('states: ' + st);
        console.log('states[0]: ' + st[0]?.key);
        const found = st.find(s => s.key === state);
        console.log('st: ' + found?.key);
        console.log('st: ' + found?.value);

        return st.value;
    }

    return (
        <div className="profile-edit-main-wrapper">
            <div className="top-bg-img"></div>
            <div className="left-col">

                <div className="info-container personal-info-div">
                    <form id="personal-info-form">
                        <div className="field-wrapper two-items">
                            <ViewOnlyField bold={true} value={"Contact Information"} mask={false}></ViewOnlyField>
                        </div>
                        <div className="field-wrapper two-items">
                            <TextField InputProps={{readOnly: true}} variant="filled" label="Email" value={email}></TextField>
                            <TextField onChange={handlePhoneChange} variant="filled" label="Phone" value={phone}></TextField>
                        </div>
                        <div className="field-wrapper two-items">
                            <TextField onChange={handleCityChange} variant="filled" label="City" value={city}></TextField>
                            <TextField onChange={handleStateChange} style={{ width: '192px'}} select variant="filled" label="State" value={state} >
                                {states.map((option) => (
                                    <option key={option.key} value={option.value}>
                                        {option.value}
                                    </option>
                                ))}
                            </TextField>
                        </div>
                        <div className="field-wrapper two-items">
                            <TextField onChange={handleStreetChange} variant="filled" label={"Street" + street} value={street}></TextField>
                            <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} onChange={handleZipChange} style={{ width: '192px'}}  variant="filled" label="Zip Code" value={zip} ></TextField>
                        </div>
                    </form>
                </div>
            </div>
            <div className="right-col">

                <div className="user-card">
                    <h3>{fn + " " + ln}</h3>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <button type="submit" form="personal-info-form" onClick={updateUser} className="card-buttons save-button">Save Changes</button>
                        <Link className="card-buttons cancel-button" to="/">Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfoEdit;