import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import styled from "styled-components";
import AvatarModal from "./AvatarModal";


const PageContainer = styled.div`
  max-width: 1120px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
`;


const Banner = styled.img`
    height: ${props => props.height};
    width: ${props => props.width}
`;
const defaultImageUrl = `/images/default-banner.png`;


class UserPage extends Component {

    render() {
        return (
            <>
            <Banner
                src={defaultImageUrl}
                height="320px"
                width="100%"
            />
            <PageContainer>
                <ContentContainer>
                <AvatarModal

                />
                 <AvatarModal
                     
                 />
                </ContentContainer>
            </PageContainer>
            </>
        );
    }
}

const mapStateToProps = ({ }) => ({ });

export default compose(withRouter, connect(mapStateToProps, {}))(UserPage);
