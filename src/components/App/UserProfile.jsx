import React, { Component } from "react";
import { compose } from "redux";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import cityScape from "../../lib/images/featured-image-tmp.png";
import Thumbnail from "./Thumbnail";
import DataDisplay from "./DataDisplay";

const data = {
  name: {
    firstName: "Mac",
    lastName: "Little"
  },
  personalInfo: {
    jobTitle: "Developer",
    jobFunction: "Building features for LoanBoss"
  },
  contactInformation: {
    email: "mlittle17@gmail.com",
    phoneNumber: "6785387515",
    address: {
      street: "123 Main St",
      city: "Somewhere",
      state: "North Carolina",
      zip: "12345"
    }
  }
};
const Container = styled.div`
  max-width: 1120px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: ${props => (!props.isReversed ? "row" : "row-reverse")};
`;

const ThumbnailSection = styled.div`
  display: flex;
  flex: 1;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: -3em;
`;

const CardWrapper = styled.div`
  &.card-wrapper > div {
    position: sticky !important;
    top: 20px;
    border-radius: 8px;
    z-index: 1;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex: 2;
  margin-top: 56px;
  padding-bottom: 4em;

  .module:not(:first-child) {
    margin-top: 56px;
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 320px;
`;

function UserProfile() {
  return (
    <div>
      <Container>
        <StyledDiv>
          <img className="backgroundImage" src={cityScape} alt="skyline" />
        </StyledDiv>
        <BodyContainer>
          <ThumbnailSection>
            <CardWrapper>
              <Thumbnail name={data.name}> </Thumbnail>
            </CardWrapper>
          </ThumbnailSection>
          <InfoSection>
            <Grid>
              <DataDisplay listItems={data.personalInfo} />

              <DataDisplay listItems={data.contactInformation} />
            </Grid>
          </InfoSection>
        </BodyContainer>
      </Container>
    </div>
  );
}

export default compose(UserProfile);
