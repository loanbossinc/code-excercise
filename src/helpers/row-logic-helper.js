import { get } from 'lodash';
import moment from 'moment';
import numeral from 'numeral';

export const isContainedInList = (data, lookingForPath, list) => {
  const lookingFor = get(data, lookingForPath);

  if (!lookingFor || !list || !list.length) return false;
  return list.some(type => type === lookingFor);
}

export const formatDate = (dateString, dateFormat) => {
  if (!dateString) return;
  return moment(dateString).format(`${dateFormat || 'MM/DD/YYYY'}`);
}

export const defaultField = (data, variablePath) => {  
  const value = get(data, variablePath);
  if (!value && value !== 0) return '--';
  return value;
}
export const defaultBooleanField = (data, variablePath, trueOverride, falseOverride) => {
  const value = get(data, variablePath);
  if (value === undefined || value === null) return '--';
  if (value && !!trueOverride){
    return trueOverride;
  } else if (!value && !!falseOverride){
    return falseOverride;
  } else{
    return value;
  }
}
export const defaultPercentField = (data, variablePath, divisor) => {
  const value = get(data, variablePath);
  if ((!value && value !== 0) || value === '--') return '--';

  return value / divisor;
}
export const defaultDSCRField = (data, variablePath, divisor) => {
  const value = get(data, variablePath);
  if (!value || value === '--') return '--';

  return value + "x";
}

// please don't use this for anything other than subtext
export const subStringDollarFormat = (data, variablePath, format) => {
  const value = get(data, variablePath);
  if (!value) return null;
  return numeral(value).format(format || '($0,0)');
}

export const subStringPercentFormat = (data, variablePath, format) => {
  const value = get(data, variablePath);
  if (!value) return null;
  return numeral(value).format(format || '0.00%');
}

export const mapAsOfSubtextDate = (data, lookingForPath) => {
  const reportingStart = defaultField(data, lookingForPath);
  if (!reportingStart || reportingStart === '--') return null;

  return `As Of ${formatDate(reportingStart, 'MMM D, YYYY')}`
}

export const mapRefSubtext = (data, lookingForPath) => {
  const reportingRef = defaultField(data, lookingForPath);
  if (!reportingRef || reportingRef === '--') return null;
  return reportingRef;
}

export const mapSubTextFrequency = (data, lookingForPath) => {
  const value = defaultField(data, lookingForPath);
  if (!value || value === '--') return null;

  // the fields in the database are saved as the value. If they every decide to save this as something
  // else then this will break and will not show the correct thing. however we cant change the fields
  // in the DB atm because we don't know what they will affect. 
  // everyone's favorite developer strike again...
  const found = [
    { label: "One Time", value: "oneTime" }
    , { label: "Monthly", value: "monthly" }
    , { label: "Quarterly", value: "quarterly" }
    , { label: "Semi Annually", value: "semiAnnually" }
    , { label: "Annually", value: "annually" }
  ].find(option => option.value === value);

  if (!found) {
    console.error(`
      File: src/helpers/row-logic-helper.js
      Function: mapSubTextFrequency

      The value: ${value} was passed into the mapSubTextFrequency helper 
      function that cannot be found. Please check that the value is correct
      or that the list of options for frequency type is correct.
    `);
  }

  return !!found ? found.label : null;
} 
