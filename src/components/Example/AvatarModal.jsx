import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import styled from "styled-components";

const AvatarMainModal = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 200px;
`;


function AvatarModal(props){

        return (
            <AvatarMainModal>
                hi there
            </AvatarMainModal>
        );
}



export default AvatarModal;
