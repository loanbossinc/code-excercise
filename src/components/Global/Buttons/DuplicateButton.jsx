import React, {Fragment} from 'react';
import styled from 'styled-components';
import SecondaryButton from './SecondaryButton';
import ContentCopy from "@material-ui/icons/ContentCopy";

const DuplicateButton = ({onClick, ...other}) => {
 return (  
  <SecondaryButton onClick={onClick} {...other}>
        <ContentCopy/>
        DUPLICATE
  </SecondaryButton>  
 ) 
}
export default DuplicateButton;