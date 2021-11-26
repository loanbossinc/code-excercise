import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import styled from "styled-components";
import UserProfile, { 
    CellLable,
    InfoContainer,
    InfoCell,
    MainTitle,
    TitleItem } from "../UserProfile";
import Dropdown from "components/Global/Dropdown/Dropdown";
import { PrimaryButton, SecondaryButton } from "components/Global/Buttons";


const PageContainer = styled.div`
  max-width: 1120px;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ContentContainer = styled.form`
    margin-top: 150px;
    display: flex;
    flex-direction: row;
    column-gap: 50px;
    margin-bottom: 30px;
`;



const EditContent = styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    width: 700px;
    gap: 30px;
`

const Banner = styled.img`
    position: absolute;
    top: 50;
    left: 0;
    height: ${props => props.height};
    width: ${props => props.width}
`;

const Label = styled.label`
    color: grey;
    margin: 0;
    width: 150px;
`
const Input = styled.input`
    width: 300px;
`;

const ActionContainer = styled.div`
    border-radius: 5%;
    background-color: white;
    border: rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 10px #888888;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 200px;
    width: 300px;
    gap: 10px;
`
const ActionSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 150px;
`;

const Name = styled.h3`
    font-weight: bold;
`
const ImageContainer = styled.img`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    padding: auto;
`;

const SaveButton = styled(PrimaryButton)`
&&{
    width: 280px;
}`

const CancleButton = styled(SecondaryButton)`
&&{
    width: 280px;
    border: 1px solid;
}`

const defaultImageUrl = `/images/default-banner.png`;
const defaultAvatarImg = `/images/loanBossLogoLight.png`;

// const stateOptions = [
//     {label: "AK"},
//     {label: "AL"},
//     {label: "AR"},
//     {label: "AZ"},
//     {label: "CA"},
//     {label: "CO"},
//     {label: "CT"},
//     {label: "DE"},
//     {label: "FL"},
//     {label: "GA"},
//     {label: "HI"},
//     {label: "IA"},
//     {label: "ID"},
//     {label: "IL"},
//     {label: "KS"},
//     {label: "KY"},
//     {label: "LA"},
//     {label: "MA"},
//     {label: "MD"},
//     {label: "ME"},
//     {label: "MI"},
//     {label: "MN"},
//     {label: "MO"},
//     {label: "MS"},
//     {label: "MT"},
//     {label: "NC"},
//     {label: "ND"},
//     {label: "NE"},
//     {label: "NH"},
//     {label: "NJ"},
//     {label: "NM"},
//     {label: "NV"},
//     {label: "NY"},
//     {label: "OH"},
//     {label: "OK"},
//     {label: "OR"},
//     {label: "PA"},
//     {label: "RI"},
//     {label: "SC"},
//     {label: "SD"},
//     {label: "TN"},
//     {label: "TX"},
//     {label: "UT"},
//     {label: "VA"},
//     {label: "VT"},
//     {label: "WA"},
//     {label: "WI"},
//     {label: "WV"},
//     {label: "WY"}
// ]




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
    const [newPhoneNumber, setNewPhoneNumber] = useState('');
    const [newStreet, setNewStreet] = useState('');
    const [newCity, setNewCity] = useState('');
    const [newZipcode, setNewZipcode] = useState('');

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
        <Banner
            src={defaultImageUrl}
            height="320px"
            width="100%"
        />
        <PageContainer>
            <ContentContainer action='/example'>
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
                    <ActionContainer>
                        <ActionSection>
                            <Name>{user.firstName} {user.lastName}</Name>
                            <ImageContainer src={defaultAvatarImg}/>
                        </ActionSection>
                        <ActionSection>
                            <SaveButton type="submit" onClick={handleSaveChanges} >Save Changes</SaveButton>
                        </ActionSection>
                        <ActionSection>
                            <CancleButton>
                                Cancle
                            </CancleButton>
                        </ActionSection>
                    </ActionContainer>
            </ContentContainer>
        </PageContainer>
        </>
    );
}

const mapStateToProps = ({ }) => ({ });

export default compose(withRouter, connect(mapStateToProps, {}))(EditContactPage);
