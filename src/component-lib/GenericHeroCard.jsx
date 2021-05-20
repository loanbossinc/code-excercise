/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { DealHeroCard } from "@loanbossinc/component-library";
import { getMetricList } from "./heroCard_Util";

export class GenericHeroCard extends Component {
  render() {
    const { deal, title, backLabel, buttons, rightTopButton } = this.props;
    if (!deal) return null;

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
        onClick: () => this.props.history.goBack()
      }
    ];

    if (rightTopButton) topButtons.push(rightTopButton);

    return <DealHeroCard title={title} dealMetricList={getMetricList(deal)} topButtons={topButtons} buttonList={buttonList} />;
  }
}

export default GenericHeroCard;
