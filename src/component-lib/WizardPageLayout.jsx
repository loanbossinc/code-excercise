import React from "react";
import styled from "styled-components";
import { ImageLoader, AppFooter } from "@loanbossinc/component-library";

const PageContainer = styled.div`
  background: #fafafa;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const BodyContainer = styled.div`
  max-width: 1120px;
  margin: auto;
  display: flex;
  flex-direction: ${props => (!props.isReversed ? "row" : "row-reverse")};
  justify-content: center;
  flex-grow: 1;
  padding-bottom: 4em;
`;

const CardWrapper = styled.div`
  background: #ffffff;
  margin-top: -10em;
  padding-bottom: 4em;
  width: 648px;
  z-index: 1;

  /* Default stroke */
  border-radius: 8px;
  border: 1px solid #dadce0;
  box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  flex-grow: 1;
`;

const FooterContainer = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column-reverse;
`;

const FooterContentWrapper = styled.div`
  padding-top: 2em;
  padding-left: calc(100vw * 0.28);
`;

const Banner = styled.div`
  height: 320px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledImgLoader = styled(ImageLoader)`
  && {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

const defaultImageUrl = `/images/default-banner.png`;

function WizardPageLayout(props) {
  const { bannerImageUrl, cardComponent } = props;

  return (
    <>
      <PageContainer>
        <Banner>
          <StyledImgLoader src={bannerImageUrl} defaultImage={defaultImageUrl} height="320px" width="1120px" />
        </Banner>
        <BodyContainer>
          <CardWrapper>{cardComponent}</CardWrapper>
        </BodyContainer>
        <FooterContainer>
          <FooterContentWrapper>
            <AppFooter
              phoneNumber="(980) 701-0180"
              supportEmail="support@loanboss.com"
              address="© 2021 LoanBoss LLC. All rights reserved. 1300 South Mint Street, Suite 410, Charlotte NC 28203."
            />
          </FooterContentWrapper>
        </FooterContainer>
      </PageContainer>
    </>
  );
}

export default WizardPageLayout;
