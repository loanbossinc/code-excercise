import React, { useEffect, useState, Fragment } from "react";
import ViewOnlyField from "components/Global/Fields/ViewOnlyField";
import { Link } from "react-router-dom";
import './index.css';   

const UserProfile = () => {

    const [user, setUser] = useState({});
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    useEffect(() => {
        getUser();
    }, []);

    async function getUser() {
        //! Would check for prod URL in a real project. And probably a .env file
        const url = "http://localhost:8080/me"; 

        const response = await fetch(url).then(blob => blob.json()).then(data => data);
        console.log('response: ', response);
        
        setUser(response.user);
    }

    return (
        <div className="profile-main-wrapper">
            <div className="top-bg-img"></div>
            <div className="left-col">
                <div className="user-card">
                    User Card
                </div>
            </div>
            <div className="right-col">

                <div className="info-container user-profile-div">
                    <div id="user-profile-title" className="field-wrapper fw700">
                        <ViewOnlyField bold={true} value={"User Profile"} placeholder={"Placeholder"} mask={false}></ViewOnlyField>
                    </div>
                    <div className="field-wrapper two-items">
                        <ViewOnlyField bold={true} value={"Contact Information"} placeholder={"Placeholder"} mask={false}></ViewOnlyField>
                        <div className="button-container">
                            <Link to="/contact-info-edit" className="edit-details-button">Edit Details</Link>
                            <svg className="carrot-button" onClick={() => setIsProfileOpen(!isProfileOpen)} width="12" height="18" viewBox="0 0 12 18" fill="none">
                                <rect width="12" height="18" rx="2" fill="#E8F4F8" />
                                <path d="M2 2L6 7L10 2" stroke="#0159A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 16L6 11L10 16" stroke="#0159A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    {isProfileOpen && 
                        <Fragment>
                            <div className="field-wrapper two-items">
                                <ViewOnlyField bold={false} value={'NAME'} placeholder={"Placeholder"} mask={false}></ViewOnlyField>
                                <ViewOnlyField bold={true} value={user?.firstName + ' ' + user?.lastName || ''} placeholder={"Placeholder"} mask={false}></ViewOnlyField>
                            </div>
                            <div className="field-wrapper two-items">
                                <ViewOnlyField bold={false} value={'TITLE'} placeholder={"Placeholder"} mask={false}></ViewOnlyField>
                                <ViewOnlyField bold={true} value={user?.jobTitle || ''} placeholder={"Placeholder"} mask={false}></ViewOnlyField>
                            </div>
                            <div className="field-wrapper two-items">
                                <ViewOnlyField bold={false} className="fw700" value={'FUNCTION'} placeholder={"Placeholder"} mask={false}></ViewOnlyField>
                                <ViewOnlyField bold={true} value={user?.jobFunction || ''} placeholder={"Placeholder"} mask={false}></ViewOnlyField>
                            </div>
                        </Fragment>
                    }
                </div>

                <div className="info-container personal-info-div">
                    <div className="field-wrapper two-items">
                        <ViewOnlyField bold={true} value={"Personal Information"} placeholder={"Placeholder"} mask={false}></ViewOnlyField>
                        <div className="button-container">
                            <Link to="/profile-edit" className="edit-details-button">Edit Details</Link>
                            <svg className="carrot-button" onClick={() => setIsContactOpen(!isContactOpen)} width="12" height="18" viewBox="0 0 12 18" fill="none">
                                <rect width="12" height="18" rx="2" fill="#E8F4F8" />
                                <path d="M2 2L6 7L10 2" stroke="#0159A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 16L6 11L10 16" stroke="#0159A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    {isContactOpen && 
                        <Fragment>
                            <div className="field-wrapper two-items">
                                <ViewOnlyField bold={false} value={"EMAIL"} placeholder={"Placeholder"} mask={false}></ViewOnlyField>
                                <ViewOnlyField bold={false} value={user?.email} placeholder={"Placeholder"} mask={false}></ViewOnlyField>
                            </div>
                            <div className="field-wrapper two-items">
                                <ViewOnlyField bold={false} value={'PHONE NUMBER'} placeholder={"Placeholder"} mask={false}></ViewOnlyField>
                                <ViewOnlyField bold={false} value={user?.phone || ''} placeholder={"Placeholder"} mask={false}></ViewOnlyField>
                            </div>
                            <div className="field-wrapper two-items">
                                <ViewOnlyField bold={false} value={'ADDRESS'} placeholder={"Placeholder"} mask={false}></ViewOnlyField>
                                <ViewOnlyField bold={false} value={user?.address || ''} placeholder={"Placeholder"} mask={false}></ViewOnlyField>
                            </div>
                        </Fragment>
                    }
                </div>
            </div>
        </div>
    );
}

export default UserProfile;