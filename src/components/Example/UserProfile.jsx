import React from "react";
import styled from "styled-components";
import ContactInfo from "./ContactInfo";
import PersonalInfo from "./PersonalInfo";
import { SecondaryButton } from "components/Global/Buttons";

const ContentContainer = styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    width: 700px;
    gap: 30px;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: white;
`;


const Item = styled.li`
    align-content: center;
    display: flex;
    flex-direction: row;
    padding: 25px 30px;
    border: 0.5px solid #dcdedc;
    justify-content: space-between;

`;

export const TitleItem = styled(Item)`
&&{
    height: 30px;
}`;

export const InfoCell =styled(Item)`
&&{
    height: 20px;
}`


export const CellLable = styled.p`
    color: grey;
    margin: 0;
    width: 150px;
`
export const FetchedUserInfo = styled.h3`
    font-weight: bold;
    margin: 0;
    width: 300px;

`

export const MainTitle = styled.h3`
    font-weight: bold;
    margin: 0;
    padding: 5px 0;
`;

export const EditButton = styled(SecondaryButton)`
&&{
    border: 1px solid;
    width: auto;
}`


function UserProfile(props) {
    return(
    <ContentContainer>
     <PersonalInfo
         userFirstName={props.user.firstName}
         userLastName={props.user.lastName}
         userTitle={props.user.title}
         userFunction={props.user.jobFunction}
         onEdit={props.onEditContactInfo}
     />
     <ContactInfo
         userEmail={props.user.email}
         userPhoneNumber={props.user.phone}
         userStreet={props.user.street}
         userCity={props.user.city}
         userState={props.user.state}
         userZipCode={props.user.zipCode}
         onEdit={props.onEditPersonalInfo}
     />

    </ContentContainer>);
}

export default UserProfile;