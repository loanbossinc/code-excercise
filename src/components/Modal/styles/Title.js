import styled from "styled-components";
import { withTheme } from "@material-ui/core/styles";
import { DialogTitle } from "@material-ui/core";

const Styles = styled(DialogTitle).attrs({
  classes: { root: "DialogTitle" }
})`
  &.DialogTitle {
    background-color: ${props => props.theme.palette.primary.main};
    

    h2 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: auto;
      color: ${props => props.theme.palette.primary.contrastText};
    }

    button {
      margin-left: auto;
      text-align: center;
      color: ${props => props.theme.palette.primary.contrastText};
    }
  }
`;

export default withTheme()(Styles);
