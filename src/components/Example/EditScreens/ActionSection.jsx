
import { PrimaryButton, SecondaryButton } from "components/Global/Buttons";
import React from "react";
import styled from "styled-components";


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

const Section = styled.div`
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

function ActionSection(props) {
    return (
        <ActionContainer>
            <Section>
                <Name>{props.firstName} {props.lastName}</Name>
                <ImageContainer src={props.defaultAvatarImg}/>
            </Section>
            <Section>
                <SaveButton type="submit" onClick={props.handleSaveChanges} >Save Changes</SaveButton>
            </Section>
            <Section>
                <CancleButton type="submit">
                    Cancle
                </CancleButton>
            </Section>
        </ActionContainer>
    )
}

export default ActionSection;