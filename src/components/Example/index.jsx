import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import styled from "styled-components";
import AvatarModal from "./AvatarModal";
import UserProfile from "./UserProfile";


const PageContainer = styled.div`
  max-width: 1120px;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ContentContainer = styled.div`
    margin-top: 150px;
    display: flex;
    flex-direction: row;
    column-gap: 50px;
    margin-bottom: 30px;
`;

const Banner = styled.img`
    position: absolute;
    top: 50;
    left: 0;
    height: ${props => props.height};
    width: ${props => props.width}
`;
const defaultImageUrl = `/images/default-banner.png`;
const defaultAvatarImg = `/images/loanBossLogoLight.png`;




class UserPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            image: defaultAvatarImg,
            user: {
                firstName: "",
                lastName: "",
                title: "",
                jobFunction: "",
                email: "",
                phone: "",
                state: "",
                city: "",
                zipCode: "",
                street: ""
            }
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/me', {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            }
          })
          .then(response => response.json())
          .then(data => {
            this.setState({
                user: data
            })
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }




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
                    image={this.state.image}
                    firstName={this.state.user.firstName}
                    lastName={this.state.user.lastName}
                />
                <UserProfile
                    user={this.state.user}
                />
                </ContentContainer>
                
            </PageContainer>
            </>
        );
    }
}

const mapStateToProps = ({ }) => ({ });

export default compose(withRouter, connect(mapStateToProps, {}))(UserPage);
