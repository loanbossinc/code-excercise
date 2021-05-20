import React from 'react';
import styled from 'styled-components';

export const TinyHelper = styled.div`
  color: #999;
  position: absolute;
  top: -13px;
  z-index: 5;
`
export const styles = theme => ({
  root: {
    
    width:'100%'    
  }
})
export const selectStyles = {    
  container: (provided, state) => ({
    ...provided,

    /* Work Sans / 12 Semibold CAPS */
    fontFamily: "Work Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "14px",

    /* Text / Dark Gray */
    color: "#5F6368",

    borderBottom: '1px solid #DADCE0',
    
    width: '100%',    
    transition: 'border 0.1s',
    '&:hover': {
      cursor: 'pointer',
      borderBottom: '1px solid #DADCE0'
    },
  }),
  option: (provided, state) => ({
    ...provided
  }),
  valueContainer : (provided, state) => ({
    ...provided,
    padding: 0,
    cursor: 'pointer'    
  }),
  indicatorSeparator: (provided, state) => ({
    display:'none'
  }),
  placeholder: (provided, state) => ({
    color: '#999',      
  }),
  control: (provided, state) => ({

    display:'flex',
    justifyContent: 'space-between',
    boxShadow: 'none',
    border:'none',
    
  }),
  menu:  (provided, state) => ({
    ...provided,
    zIndex: 6
  })
}

export const addDisabledStyles = (currentSelectStyles, isDisabled) => {
  if (isDisabled) {
    currentSelectStyles.container = (provided,state) => ({            
        ...provided,
        background:'none',
        border: '0',
        borderBottom: '0px',
        '&:hover': {
          cursor: 'pointer',
          borderBottom: '0px'
        },
    });
    currentSelectStyles.control = (provided,state) => ({
      ...provided,
      background: 'none',
      border: '0',
    })
    currentSelectStyles.indicatorsContainer = (provided,state) => ({
      ...provided,
      display:'none'
    })
  }
}
export const addErrorStyles = (currentSelectStyles) => {
  _addErrorStyles(currentSelectStyles);
}

export const checkAndAddErrorStyles = (currentSelectStyles, error,shouldShowError, required) => {  
  if(!!error && shouldShowError && required){
    _addErrorStyles(currentSelectStyles);
  }
}
const _addErrorStyles = (currentSelectStyles) => {
  currentSelectStyles.placeholder = (provided, state) => ({
    color: 'red',      
  });
  currentSelectStyles.container = (provided, state) => ({
    ...provided,
    width: '100%',
    borderBottom: '1px solid red',
    transition: 'border 0.1s',
    '&:hover': {
      cursor: 'pointer',
      borderBottom: '1px solid red'
    }
  })
}
export const addSelectedOptionStyles = (currentSelectStyles, placeholder) => {
  if(placeholder){
    currentSelectStyles.placeholder = (provided, state) => ({
      color: '#000'
    });
  }
}