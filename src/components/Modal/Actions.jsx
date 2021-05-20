import DialogActions from "@material-ui/core/DialogActions";
import styled, { css } from "styled-components";

const Actions = styled(DialogActions)`
  && {
    ${props =>
      props.fixed &&
      css`
        box-sizing: border-box;
        width: 100%;
        background: white;
        margin: 1em 0 0;
      `};
  }
`;

export default Actions;
