import styled from "styled-components";

export const StyledModuleFooter = styled.div`
  && {
    display: flex;
    background-color: #FAFAFA;
    height: 48px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;

    button {
      display: flex;
      flex: 1;
      justify-content: space-between;
      padding-left: 24px;
      padding-right: 24px;

      &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
  }
`;

export const StyledFooterText = styled.span`
&& {
    font-family: Work Sans;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #5F6368;
    padding: 6px 8px;
    display: flex;
    flex: 1;
    align-items: center;

    &.align-right {
      justify-content: flex-end;
    }
}`;
