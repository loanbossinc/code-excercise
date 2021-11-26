import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import styled from "styled-components";
import Dropdown from "components/Global/Dropdown/Dropdown";
import { PrimaryButton, SecondaryButton } from "components/Global/Buttons";
import { EditContent, FormContainer, Input, Label } from "./styles";
import { 
    Banner, 
    InfoCell, 
    InfoContainer, 
    MainTitle, 
    PageContainer, 
    TitleItem
} from "../styles";
import ActionSection from "./ActionSection";


const defaultImageUrl = `/images/default-banner.png`;
const defaultAvatarImg = `/images/loanBossLogoLight.png`;


function EditContactPage() {
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
    const [selectedStateDropdown, setSelectedStateDropdown] = useState('');

    useEffect(()=>{
        fetch('http://localhost:8080/me/contact-update', {
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
    
    const onStateChange = event => {  
        setSelectedStateDropdown(event.value)
        setUser(prevState => ({
            ...prevState,
            state: event.label
        }))
    }


    // borrowed from: https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object
    const handleChange = e =>{
        const {name, value} = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSaveChanges = () => {
        fetch('http://localhost:8080/me/contact-update', {
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
                                    <MainTitle>Contact Information</MainTitle>
                                </TitleItem>
                                <InfoCell>
                                    <Label for='email'>Email</Label>
                                    <Input 
                                        type="email"
                                        defaultValue={user.email}
                                        disabled={true}
                                    />
                                </InfoCell>
                                <InfoCell>
                                    <Label for='phone'>Phone Number</Label>
                                    <Input 
                                        type="phone"
                                        name="phone"
                                        defaultValue={user.phone}
                                        onBlur={handleChange}
                                    />
                                </InfoCell>
                                <InfoCell>
                                    <Label for='street'>Street</Label>
                                    <Input 
                                        type="text"
                                        defaultValue={user.street}
                                        name="street"
                                        onBlur={handleChange}
                                    />
                                </InfoCell>
                                <InfoCell>
                                    <Label for='city'>City</Label>
                                    <Input 
                                        type="text"
                                        defaultValue={user.city}
                                        name="city"
                                        onBlur={handleChange}
                                    />
                                </InfoCell>
                                <InfoCell>
                                    <Label for='state'>State</Label>
                                    <Dropdown
                                        options={user.statesList}
                                        name="state"
                                        value={selectedStateDropdown}
                                        onChange={onStateChange}
                                    />
                                </InfoCell>
                                <InfoCell>
                                    <Label for='zipcode'>Zipcode</Label>
                                    <Input 
                                        type="text"
                                        defaultValue={user.zipcode}
                                        name="zipcode"
                                        onBlur={handleChange}
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

export default compose(withRouter, connect(mapStateToProps, {}))(EditContactPage);
