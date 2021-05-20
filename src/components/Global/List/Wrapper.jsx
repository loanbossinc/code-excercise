import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import AddItemIcon from "@material-ui/icons/AddToPhotos";
import styled from "styled-components";
import { Add, Poll } from "@material-ui/icons";

const NewButton = styled(Button)`
  && {
    display: inline-block;    
    padding: 8px 8px 8px 2px;
    border-radius: 0;
    color: #2196f3;
    background: none;
    margin-left: auto;
    justify-content: space-around;
    align-items: center;
    margin-right: 1em;
  }
  & span {
    margin-left: 4px;
  }
  &&:hover {
    background: #f6f6f6;
  }
`;

const ListWrapper = ({ children, buttonProps, buttonPropsLeft }) => (
  <Grid item xs={12}>
    <div style={{disply:"flex", textAlign: "right"}}>
     {buttonPropsLeft ? 
      <Tooltip variant="contained" title={buttonPropsLeft.label} placement="top">
        <NewButton  {...buttonPropsLeft} style={buttonPropsLeft.style}>
          <Poll style={{marginBottom: "-7px"}} />
          <span>{buttonPropsLeft.label}</span>
        </NewButton>
      </Tooltip>
      : null } 
    {buttonProps ? 
      <Tooltip variant="contained" title={buttonProps.label} placement="top">
        <NewButton  {...buttonProps} style={buttonProps.style}>
          <Add style={{marginBottom: "-7px"}} />
          <span>{buttonProps.label}</span>
        </NewButton>
      </Tooltip>
      : null } 
    {children}
    </div>
  </Grid>
);

export default ListWrapper;
