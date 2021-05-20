/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { CustomHeroCard } from "@loanbossinc/component-library";

export class CustomizableHeroCard extends Component {
  render() {
    const { cardContent, title, backLabel, buttons, rightTopButton, onBackButtonClick } = this.props;
    if (!cardContent) return null;

    const buttonList = !buttons ? [] : buttons;
    if (this.props.save)
      buttonList.push({
        label: "Save Changes",
        onClick: this.props.save
      });

    if (this.props.cancel)
      buttonList.push({
        label: "Reset",
        onClick: this.props.cancel
      });

    const topButtons = [
      {
        label: backLabel,
        iconName: "arrow_forward",
        topButtonAlignment: "left",
        onClick: () => onBackButtonClick || this.props.history.goBack()
      }
    ];

    if (rightTopButton) topButtons.push(rightTopButton);

    return <CustomHeroCard title={title} cardContent={cardContent} topButtons={topButtons} buttonList={buttonList} />;
  }
}

export default CustomizableHeroCard;
