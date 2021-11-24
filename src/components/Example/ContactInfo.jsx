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


function ContactInfo(props) {
    return(
    <InfoContainer>
        <TitleItem>
            <MainTitle>User Profile</MainTitle>
        </TitleItem>
        <TitleItem>
            <MainTitle>Contact Information</MainTitle>
            <EditButton>Edit Details</EditButton>
        </TitleItem>
        <InfoCell>
          <CellLable>NAME</CellLable>
          <FetchedUserInfo>{props.userName}</FetchedUserInfo>
        </InfoCell>
        <InfoCell>
          <CellLable>TITLE</CellLable>
          <FetchedUserInfo>{props.userTitle}</FetchedUserInfo>
        </InfoCell>
        <InfoCell>
          <CellLable>FUNCTION</CellLable>
          <FetchedUserInfo>{props.userFunction}</FetchedUserInfo>
        </InfoCell>

    </InfoContainer>
    );
}

export default ContactInfo;