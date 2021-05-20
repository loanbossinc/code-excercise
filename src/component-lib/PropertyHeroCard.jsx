import React, { Component } from "react";
import { DealHeroCard } from '@loanbossinc/component-library';
import { shouldSquareFeet } from '../pages/propertyDetail/property-general-information/section-property-details-rows-logic'

export class PropertyHeroCard extends Component {
  getValue = (metricId) => {
    const { propertyData } = this.props;
    const { property } = propertyData;
    if (!property) return {};
    const found = property[metricId];
    return found ? { metricId, displayValue: found, decimalValue: found, dateValue: found, integerValue: found } : {};
  }

  getMetricList = (property) => {
    let metricList = property ? [
      {
        label: 'Purchase Date'
        , ...this.getValue("purchaseDate")
      }
      , {
        label: 'Purchase price'
        , ...this.getValue("purchasePrice")
      }
    ] : [];
    const sqFt_Unit = shouldSquareFeet(property) ? {
      label: 'Square footage'
      , ...this.getValue("squareFeet")
    } :
      {
        label: 'Number of units'
        , ...this.getValue("units")
      }
    metricList.push(sqFt_Unit);
    return metricList;

  }

  render() {
    const { propertyData, backLabel, hideButtons, rightTopButton, buttonListOverride} = this.props;
    const { property } = propertyData;

    if(!property) return null;

    let buttonList = hideButtons ? [] :[
      {
        label: "Save Changes"
        , onClick: this.props.save
      }
      , {
        label: "Reset"
        , onClick: this.props.cancel
      }
    ];

    if(buttonListOverride)
      buttonList = buttonListOverride;

    let topButtons = [
      {
        label: backLabel
        , iconName: "arrow_forward"
        , topButtonAlignment: 'left'
        , onClick: () => this.props.history.goBack()
      }];

    if(rightTopButton)
      topButtons.push(rightTopButton);


    return (
      <DealHeroCard
        title={!property || property.address}
        dealMetricList={this.getMetricList(property)}
        topButtons={topButtons}
        buttonList={buttonList}
      />
    );
  }
}
