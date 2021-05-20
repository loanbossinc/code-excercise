// Config
import numeral from "numeral";

export function formatCurrencyHelper(value) {
  if (!value) return null;
  return numeral(value).format("$0,0");
}

export function formatPercentageHelper(value) {
  if (!value) return null;
  // return numeral(value).format("0.00%");
  return `${value}%`;
}
