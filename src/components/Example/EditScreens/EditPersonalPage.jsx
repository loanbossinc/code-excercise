import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import { 
    Banner,
    InfoCell,
    InfoContainer,
    MainTitle,
    PageContainer,
    TitleItem } from "../styles";
import { FormContainer, EditContent, Label, Input } from "./styles";
import ActionSection from "./ActionSection";

const defaultImageUrl = `/images/default-banner.png`;
const defaultAvatarImg = `/images/loanBossLogoLight.png`;

function EditPersonalPage() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        title: "",
        jobFunction: "",    
        email: "",
        phone: "",
        state: "",
        statesList: [],
        city:"",
        street: "",
        zipcode: ""
    });

    useEffect(()=>{
        fetch('http://localhost:8080/me/profile-update', {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            }
          })
          .then(response => response.json())
          .then(data => setUser(data))
          .catch((error) => {
            console.error('Error:', error);
          });

    },[])

    // borrowed from: https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object
    const handleChange = e =>{
        const {name, value} = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSaveChanges = () => {
        fetch('http://localhost:8080/me/profile-update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
          })
          .then(response => response.json())
          .catch((error) => {
            console.error('Error:', error);
          });
    }

   
    return (
        <>
            <Banner src={defaultImageUrl}/>
            <PageContainer>
                    <FormContainer action='/example'>
                        <EditContent>
                            <InfoContainer>
                                <TitleItem>
                                    <MainTitle>Personal Information</MainTitle>
                                </TitleItem>
                                <InfoCell>
                                    <Label>First Name</Label>
                                    <Input 
                                        type="text"
                                        name="firstName"
                                        defaultValue={user.firstName}
                                        onBlur={handleChange}
                                    />
                                </InfoCell>
                                <InfoCell>
                                    <Label>Last Name</Label>
                                    <Input 
                                        type="text"
                                        name="lastName"
                                        defaultValue={user.lastName}
                                        onBlur={handleChange}
                                    />
                                </InfoCell>
                                <InfoCell>
                                    <Label>Title</Label>
                                    <Input 
                                        type="text"
                                        name="title"
                                        defaultValue={user.title}
                                        onBlur={handleChange}
                                    />
                                </InfoCell>
                                <InfoCell>
                                    <Label>Job Function</Label>
                                    <Input 
                                        type="text"
                                        name="jobFunction"
                                        disabled={true}
                                        defaultValue={user.jobFunction}
                                    />
                                </InfoCell>
                            </InfoContainer>
                        </EditContent>
                        <ActionSection 
                            firstName={user.firstName}
                            lastName={user.lastName}
                            defaultAvatarImg={defaultAvatarImg}
                            handleSaveChanges={handleSaveChanges}
                        />
                    </FormContainer>
            </PageContainer>
        </>
    );
}

const mapStateToProps = ({ }) => ({ });

export default compose(withRouter, connect(mapStateToProps, {}))(EditPersonalPage);
