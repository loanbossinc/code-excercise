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



const defaultImageUrl = `/images/default-banner.png`;

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

     console.log(user)

   
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
                                        defaultValue= {"user.firstName"}
                                    />
                                </InfoCell>
                                <InfoCell>
                                    <Label>Last Name</Label>
                                    <Input 
                                        type="text"
                                        name="lastName"
                                        defaultValue= {"user.lastName"}
                                    />
                                </InfoCell>
                            </InfoContainer>
                        </EditContent>
                    </FormContainer>
            </PageContainer>
        </>
    );
}

const mapStateToProps = ({ }) => ({ });

export default compose(withRouter, connect(mapStateToProps, {}))(EditPersonalPage);
