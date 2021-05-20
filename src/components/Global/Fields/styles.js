import styled from "styled-components";

const DealFormStyles = styled.div `
  position: relative;
  height: 100%;
  h2 {
    color: ${({ theme }) => theme.palette.secondary.main};
    font-weight: bold;
    margin: 0 0 0.5em;
    padding-top: 1em;
  }
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  h4 {
    margin: 0.5em 0 0;
    padding: 0;
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 500;
  }
  .avp-label {
    font-size: 17px;
    color: ${({ theme }) => theme.palette.primary.main};
  }
  textarea {
    color: ${({ theme }) => theme.palette.primary.light};
    font-size: 17px;
    font-weight: normal;
  }
  .avp-section {
    width: 100%;
  }
  .avp-item {
    width: 42%;
  }
  .propertyBtn {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: #fff;
    margin-top: 20px;
  }
  ._DialogActionsNav {
    position: fixed;
    bottom: 43px;
    background-color: #fff;
    margin-left: -22px;
    border-top: 1px solid #ccc;
    width: 100%;
  }
  .form-section {
    max-height: 80vh;
    min-height: 80vh;
  }

  .DialogContent {
    display: flex;
    flex-flow: row;
    padding: 0 !important;
  }

  .FormGroup {
    margin: 1em 0;
  }
  .featureImage {
    width: auto;
    height: fit-content;
    max-width: 500px;
    max-height: 300px;
  }
  .helper-text {
    font-size: 17px;
    color: #ccc;
    padding-bottom: 25px;
    margin-left: 25px;
    font-weight: 100;
  }
  .multiline {
    min-width: 300px;
  }
  .avps_FieldsSelect,
  select li {
    text-transform: capitalize;
  }
  .selectField {
    min-width: 300px;
    max-width: 300px;
    margin: 18px 0px 0px 20px;
  }
`;

export default DealFormStyles;
