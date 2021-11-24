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


function PersonalInfo(props) {

    const address = `${props.userStreet}, ${props.userCity} ${props.userState}, ${props.userZipCode}`

    return(
        <InfoContainer>
            <TitleItem>
                <MainTitle>Personal Information</MainTitle>
                <EditButton>Edit Details</EditButton>
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

export default PersonalInfo;