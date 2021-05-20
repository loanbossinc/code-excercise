import React, { Component } from "react";
import styled from "styled-components";
import { ImageLoader, AppFooter } from "@loanbossinc/component-library";

const PageContainer = styled.div`
  max-width: 1120px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: ${props => (!props.isReversed ? "row" : "row-reverse")};
`;

const LeftBodyChild = styled.div`
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

const RightBodyChild = styled.div`
  display: flex;
  flex: 2;
  margin-top: 56px;
  padding-bottom: 4em;

  .module:not(:first-child) {
    margin-top: 56px;
  }
`;

const FooterContainer = styled.div`
  margin-top: 25px;
  background: #f7f7f7;
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 320px;
`;

const StyledImgLoader = styled(ImageLoader)`
  && {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

const defaultImageUrl = `/images/default-banner.png`;

export class CardPageLayout extends Component {
  render() {
    const { bannerImageUrl, cardComponent, bodyComponent, onImageRemove, onImageChange, enableImageChangeDialog, ...otherProps } = this.props;

    return (
      <PageContainer>
        <StyledDiv>
          <StyledImgLoader
            src={bannerImageUrl}
            defaultImage={defaultImageUrl}
            height="320px"
            width="100%"
            enableChangeDialog={enableImageChangeDialog}
            changeButtonText={bannerImageUrl ? "Change banner" : "Add banner"}
            changeDialogTitle={bannerImageUrl ? "Change cover image" : "Add cover image"}
            changeDialogMessage="Images wider than 1500 pixels work best."
            onImageRemove={onImageRemove}
            onImageChange={onImageChange}
          />
        </StyledDiv>

        <BodyContainer {...otherProps}>
          <LeftBodyChild>
            <CardWrapper className="card-wrapper">{cardComponent}</CardWrapper>
          </LeftBodyChild>
          <RightBodyChild>{bodyComponent}</RightBodyChild>
        </BodyContainer>
        <FooterContainer>
          <AppFooter
            phoneNumber="(980) 701-0180"
            supportEmail="support@loanboss.com"
            address="© 2021 LoanBoss LLC. All rights reserved. 1300 South Mint Street, Suite 410, Charlotte NC 28203."
          />
        </FooterContainer>
      </PageContainer>
    );
  }
}
