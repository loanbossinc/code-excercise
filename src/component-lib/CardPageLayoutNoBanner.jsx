import React, { Component } from "react";
import styled from "styled-components";
import { AppFooter } from "@loanbossinc/component-library";

const PageContainer = styled.div`
  max-width: 1120px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftBodyChild = styled.div`
  display: flex;
  flex: 9;
`;
const RightBodyChild = styled.div`
  display: flex;
  flex: 2;
  padding-bottom: 4em;
`;
const FooterContainer = styled.div`
  margin-top: 25px;
  background: #f7f7f7;
`;

const defaultImageUrl = `/images/default-banner.png`;

export class CardPageLayoutNoBanner extends Component {
  render() {
    const { leftComponent, rightComponent, ...otherProps } = this.props;

    return (
      <PageContainer>
        <BodyContainer {...otherProps}>
          <LeftBodyChild>{leftComponent}</LeftBodyChild>
          <RightBodyChild>{rightComponent}</RightBodyChild>
        </BodyContainer>
        <FooterContainer>
          <AppFooter
            phoneNumber="(980) 701-0180"
            supportEmail="support@loanboss.com"
            address="© 2020 LoanBoss LLC. All rights reserved. 1300 South Mint Street, Suite 410, Charlotte NC 28203."
          />
        </FooterContainer>
      </PageContainer>
    );
  }
}
