import {transformNumber} from './transformNumber'
import moment from 'moment';

export const transformRate = rate => {
  if(!rate && rate !== 0)
    return null
  return +rate / 100.0;
}

export const transformDscr = dscr => {
  if(dscr === '')
    return null
  if(!isNaN(dscr))
    return dscr;
  return +dscr.slice(0,-1)
}

export const transformInteger = integer => {
  if(!integer && integer !== 0)
    return null;
  return +integer;
}

export const transformDecimal = decimal => {
  if(!decimal && decimal !== 0)
    return null;
  return +decimal;
}

export const transformBoolean = bool => {
  if(!bool && bool !== "0" && bool !== "1")
    return null;
  return bool === "1";
}

export const transformBasisPoints = number => {
  if(!number && number !== 0){
    return null;
  }
  return +number * 0.0001;
}