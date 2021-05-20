import React from 'react';
import { Stepper, Step, StepLabel } from "@material-ui/core";

export class DynamicStepper extends React.Component {
  state = { activeStep: 0 };

  setStep = (index) => this.setState({ activeStep: index });

  getStep = (step) => {
    return (
      <Step key={step.id}>
        <StepLabel>
          {step.label}
        </StepLabel>
      </Step>
    );
  }

  render() {
    const { steps, activeStep } = this.props;

    return (
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(step => this.getStep(step))}
      </Stepper>
    );
  }
}
