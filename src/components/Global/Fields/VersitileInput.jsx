import React, { Fragment } from "react";
import {TextField} from "@material-ui/core";
import {
    TwoDecimalPercentFormat,
    ThreeDecimalPercentFormat,
    DollarAndCentFormat,
    FloatFormat,
    TwoDecimalFloatFormat,
    NoDecimalPercentFormat,
    DSCRFormat,
} from 'components/Notifications/FormattedInputs';


export const VersitileInput = ({type, placeholder, defaultValue, onChange, onBlur, inputProps, style, internalLabel, labelColor, helperTextColor, helperText, value, useRawEvents = false, isMultiline, rows}) => {
    style = {maxWidth: "150px", ...style}
    let inputPropsToUse = {
        style:{
            textAlign: "center", 
            transition: '0.3s',
        },
        ...inputProps,
    };
    switch(type){
        case 'money':
            inputPropsToUse.inputComponent = DollarAndCentFormat;
            break;   
        case 'percent':
            inputPropsToUse.inputComponent = TwoDecimalPercentFormat;
            break;
        case 'percentThreeDecimal':
            inputPropsToUse.inputComponent = ThreeDecimalPercentFormat;
            break;
        case 'percentNoDecimal':
            inputPropsToUse.inputComponent = NoDecimalPercentFormat;
            break;
        case 'integer':
            inputPropsToUse.inputComponent = FloatFormat;
            break;
        case "decimal":
            inputPropsToUse.inputComponent = TwoDecimalFloatFormat;
            break;
        case "dscr":
            inputPropsToUse.inputComponent = DSCRFormat;
        default:
            //no type means plain text
            break;
    }
    return (
        <TextField 
            defaultValue = {defaultValue}
            InputProps = {inputPropsToUse}
            onChange = {(event) => {
                if(!onChange) return null;
                if(useRawEvents) return onChange(event);
                if(type) {
                    return onChange(standardizeFormattedNumber(event.target.value));
                } else {
                    return onChange(event.target.value);
                }
            }}
            onBlur = {(event) => {
                if(!onBlur) return null;
                if(useRawEvents) return onBlur(event);
                if(type) {
                    return onBlur(standardizeFormattedNumber(event.target.value));
                } else {
                    return onBlur(event.target.value);
                }
            }}
            label = {internalLabel}
            style={style}
            value = {value}
            helperText = {helperText}
            FormHelperTextProps = {{style: {color: helperTextColor}}}
            InputLabelProps = {{style: {color: labelColor}}}
            placeholder = {placeholder}
            multiline={isMultiline}
            rows = {rows}
        />
    )
}

const standardizeFormattedNumber = (value) => {
    let convertedValue = 0;
    if(typeof value === "string"){
        if(value.length > 1){
            if(value.includes("%")){
                convertedValue = parseFloat(value.substring(0, value.length-1));
            }
            if(value.includes("$")){
                convertedValue = parseFloat(value.replace(/,/g,"").substring(1, value.length));
            }
        } else{
            return parseFloat(value);
        }
    }
    if(convertedValue > 999999999999){
        convertedValue = 999999999999; //max number the db can hold
    }
    return convertedValue || parseFloat(value.replace(/,/g,""));
}
