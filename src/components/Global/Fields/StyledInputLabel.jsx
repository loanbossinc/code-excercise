import React, { Fragment } from "react";
import styled from 'styled-components';
import { InputLabel } from "@material-ui/core";

export const StyledLabel = (props) => {
    return(
      <InputLabel
        htmlFor={props.htmlFor}
        style={
          {
            fontWeight:"bold",
            fontSize:"17px",
            color:"black"
          }
        }
      >
        { props.isEditing ? <div style={{display:"block", height:"4px"}}></div>:``}
        <div style={{marginTop:"7px"}}>{props.text}</div>
      </InputLabel>);
}