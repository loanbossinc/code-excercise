import React from "react";
import { 
    InfoContainer,
    TitleItem,
    MainTitle,
    InfoCell,
    CellLable,
    FetchedUserInfo,
    EditButton  
} from "./UserProfile";
import {withRouter} from 'react-router-dom';

function ContactInfo(props) {

    const address = `${props.userStreet}, ${props.userCity}, ${props.userState} ${props.userZipcode}`

    return(
        <InfoContainer>
            <TitleItem>
                <MainTitle>Contact Information</MainTitle>
                <EditButton onClick={() => props.history.push("/edit-contact-information")}>Edit Details</EditButton>
            </TitleItem>
            <InfoCell>
            <CellLable>EMAIL</CellLable>
            <FetchedUserInfo>{props.userEmail}</FetchedUserInfo>
            </InfoCell>
            <InfoCell>
            <CellLable>PHONE NUMBER</CellLable>
            <FetchedUserInfo>{props.userPhoneNumber}</FetchedUserInfo>
            </InfoCell>
            <InfoCell>
            <CellLable>ADDRESS</CellLable>
            <FetchedUserInfo>{address}</FetchedUserInfo>
            </InfoCell>
        </InfoContainer>);
}

export default withRouter(ContactInfo);