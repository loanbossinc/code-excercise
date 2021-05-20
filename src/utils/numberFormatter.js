import numeral from "numeral";
import moment from "moment";

export default {
  formatRate: function (rate, digits, placeholder, shouldNotMultiply) {
    if(!rate && rate !== 0)
      return placeholder;
    if(!digits && digits !== 0)
      digits = 5;
    let finalRate = rate;
    if(!shouldNotMultiply)
      finalRate = rate* 100;
    return   new Intl.NumberFormat("en-US", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    }).format(finalRate) + '%';
  },
  formatDecimal : function(number,decimalPlaces,placeholder){
    if(!number && number !== 0)
      return placeholder;
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces
    }).format(number);
  },
  formatMoney: function(num,decimalCount, placeholder) {
    if(!num && num !== 0)
      return placeholder;
    if(!decimalCount && decimalCount !== 0)
      var decimalCount = 2;
    return "$"+(
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimalCount,
        maximumFractionDigits: decimalCount
      }).format(num)
    );
  },
  formatWholeNumber: function(num, placeholder){
    if((!num && num !== 0) || isNaN(num))
      return placeholder || "";
    return new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(num)    
  },
  maskCurrency: function(num, placeholder, lessThan100kOverride = false) {
    if(!num && num !== 0)
      return placeholder || "\u2014";
    if(Math.abs(num) < 0.0001)
      return "$0";
    // if less than 100,000, format with no decimals
    if (num < 100000 && !lessThan100kOverride) {
      return `$${numeral(num).format('0,0')}`;
    }
    if (num < 100000 && lessThan100kOverride) {
      return `$${numeral(num).format('0a')}`;
    }
    // if less than 1 million, format is without decimals
    if (num < 1000000) {
      return `$${numeral(num).format('0a')}`;	
    }
    // if 1 million or above, format is always with two decimals
    if (num >= 1000000) {
      return `$${numeral(num).format('0.00a').toUpperCase()}`;
    }
  },
  yearsFromNow: function(date) {
    if(date){
      var totalMonths = moment().diff(date, 'months');
      var years = parseInt(totalMonths / 12);
      var months = totalMonths % 12;
        if(months !== 0){
           return parseFloat(Math.abs(years) + '.' + Math.abs(months)).toString() + ' Years';
         }
    return years;
      }
    return null;
  }
}
