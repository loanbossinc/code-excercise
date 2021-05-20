import React from "react";
import propTypes from "prop-types";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

function PhoneMask(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
    />
  );
}

PhoneMask.propTypes = {
  inputRef: propTypes.func.isRequired
};

function PercentMask(props) {
  const { inputRef, ...other } = props;

  const mask = createNumberMask({
    prefix: "",
    suffix: "%",
    allowDecimal: true,
    decimalLimit: 3
  });

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={mask}
      placeholderChar={"\u2000"}
    />
  );
}

PercentMask.propTypes = {
  inputRef: propTypes.func.isRequired
};

function PercentTwoDecimalMask(props) {
  const { inputRef, ...other } = props;

  const mask = createNumberMask({
    prefix: "",
    suffix: "%",
    allowDecimal: true,
    decimalLimit: 2
  });

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={mask}
      placeholderChar={"\u2000"}
    />
  );
}

TwoDecimalMask.propTypes = {
  inputRef: propTypes.func.isRequired
};

function TwoDecimalMask(props) {
  const { inputRef, ...other } = props;

  const mask = createNumberMask({
    prefix: "",
    suffix: "",
    allowDecimal: true,
    decimalLimit: 2
  });

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={mask}
      placeholderChar={"\u2000"}
    />
  );
}

PercentTwoDecimalMask.propTypes = {
  inputRef: propTypes.func.isRequired
};

function PercentThreeDecimalMask(props) {
  const { inputRef, ...other } = props;

  const mask = createNumberMask({
    prefix: "",
    suffix: "%",
    allowDecimal: true,
    decimalLimit: 3,
    allowNegative: true
  });

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={mask}
      placeholderChar={"\u2000"}
    />
  );
}

PercentThreeDecimalMask.propTypes = {
  inputRef: propTypes.func.isRequired
};

function WholeNumberMask(props) {
  const { inputRef, ...other } = props;

  const mask = createNumberMask({
    prefix: "",
    allowDecimal: false
  });

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={mask}
      placeholderChar={"\u2000"}
    />
  );
}

WholeNumberMask.propTypes = {
  inputRef: propTypes.func.isRequired
};

function RateMask(props) {
  const { inputRef, ...other } = props;

  const mask = createNumberMask({
    prefix: "",
    suffix: "%",
    allowDecimal: true,
    decimalLimit: 5
  });

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={mask}
      placeholderChar={"\u2000"}
    />
  );
}

RateMask.propTypes = {
  inputRef: propTypes.func.isRequired
};

function CurrencyMaskNoCents(props) {
  const { inputRef, ...other } = props;
  const mask = createNumberMask({
    prefix: "$",
    allowDecimal: false
  });

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={mask}
      placeholderChar={"\u2000"}
    />
  );
}
function CurrencyMask(props) {
  const { inputRef, ...other } = props;

  const mask = createNumberMask({
    prefix: "$",
    allowDecimal: true,
    decimalLimit: 2
  });

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={mask}
      placeholderChar={"\u2000"}
    />
  );
}

CurrencyMask.propTypes = {
  inputRef: propTypes.func.isRequired
};

function DateMask(props) {
  const { inputRef, ...other } = props;

  const mask = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];
  const autoCorrectedDatePipe = createAutoCorrectedDatePipe("mm/dd/yyyy");

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={mask}
      pipe={autoCorrectedDatePipe}
      placeholderChar={"\u2000"}
    />
  );
}

export default function inputComponentMask(item) {
  let mask = null;
  if (item.mask) {
    switch (item.mask) {
      case "phone":
        mask = PhoneMask;
        break;
      case "percent":
        mask = PercentMask;
        break;
      case "percent2Decimal":
        mask = PercentTwoDecimalMask;
        break;
      case "percent3Decimal":
        mask = PercentThreeDecimalMask;
        break;
      case "currency":
        mask = CurrencyMask;
        break;
      case "currencynocents":
        mask = CurrencyMaskNoCents;
        break;
      case "rate":
        mask = RateMask;
        break;
      case "date":
        mask = DateMask;
        break;
      case "wholeNumberMask":
        mask = WholeNumberMask;
        break;
      case "twoDecimalNumber":
        mask = TwoDecimalMask;
        break;
      default:
        break;
    }
  }
  return mask;
}
