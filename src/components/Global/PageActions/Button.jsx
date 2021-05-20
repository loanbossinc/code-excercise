import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  && {
    padding: 0;
    width: 35px;
    min-width: 42px;
    height: 42px;
  }

  svg {
    font-size: 17px;
  }
`;

const PageActionButton = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default PageActionButton;
