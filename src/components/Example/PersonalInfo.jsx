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

function PersonalInfo(props) {
    return(
    <InfoContainer>
        <TitleItem>
            <MainTitle>User Profile</MainTitle>
        </TitleItem>
        <TitleItem>
            <MainTitle>Personal Information</MainTitle>
            <EditButton onClick={() => props.history.push("/edit-personal-information")}>Edit Details</EditButton>
        </TitleItem>
        <InfoCell>
          <CellLable>NAME</CellLable>
          <FetchedUserInfo>{props.userFirstName} {props.userLastName}</FetchedUserInfo>
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

export default withRouter(PersonalInfo);