import createNumberMask from "text-mask-addons/dist/createNumberMask";

export default{
    "phone":()=>["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],
    "percent":createNumberMask({
        prefix: "",
        suffix: "%",
        allowDecimal: true,
        decimalLimit: 3
    }),
    "percent2Decimal":createNumberMask({
        prefix: "",
        suffix: "%",
        allowDecimal: true,
        decimalLimit: 2
    }),
    "percent3Decimal":createNumberMask({
        prefix: "",
        suffix: "%",
        allowDecimal: true,
        decimalLimit: 3,
        allowNegative: true
    }),
    "wholeNumberMask":createNumberMask({
        prefix: "",
        allowDecimal: false
    }),
    "rate":createNumberMask({
        prefix: "",
        suffix: "%",
        allowDecimal: true,
        decimalLimit: 5
    }),
    "currencynocents":createNumberMask({
        prefix: "$",
        allowDecimal: false,
        integerLimit: 12,
        placeholderChar:"\u2000"
    }),
    "currency":createNumberMask({
        prefix: "$",
        allowDecimal: true,
        decimalLimit: 2,
        placeholderChar:"\u2000"
    }),
    "date":()=>[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]
}