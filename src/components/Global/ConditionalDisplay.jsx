const ConditionalDisplay = ({ conditions, value, children }) =>
  conditions.includes(value) ? children : null;

export default ConditionalDisplay;
