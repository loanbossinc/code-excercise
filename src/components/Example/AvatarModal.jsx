import React from "react";
import styled from "styled-components";
import {PrimaryButton, SecondaryButton} from 'components/Global/Buttons'


const AvatarMainModal = styled.div`
    border-radius: 5%;
    background-color: white;
    border: rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 10px #888888;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 350px;
    width: 300px;
    gap: 10px;
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const ImageContainer = styled.img`
    border-radius: 50%;
    height: 100px;
    width: 100px;
    padding: auto;
`;

const Name = styled.h3`
    font-weight: bold;
`
const PhotoUploadButton = styled(PrimaryButton)`
&&{
    width: 280px;
}`

const ChangePasswordButton = styled(SecondaryButton)`
&&{
    width: 280px;
    border: 1px solid;
}
`

function AvatarModal(props){

        return (
            <AvatarMainModal>
                <ContentContainer>
                    <ImageContainer
                        src={props.image}>
                    </ImageContainer>
                </ContentContainer>
                <ContentContainer>
                    <Name>
                        {props.name}
                    </Name>
                </ContentContainer>
                <ContentContainer>
                    <PhotoUploadButton>Upload photo</PhotoUploadButton>
                </ContentContainer>
                <ContentContainer>
                    <ChangePasswordButton>Change password</ChangePasswordButton>
                </ContentContainer>
            </AvatarMainModal>
        );
}



export default AvatarModal;
