import React, { Component } from "react";
import { DealHeroCard } from '@loanbossinc/component-library';
import {getMetricList} from './heroCard_Util';
export class DetailHeroCard extends Component {
  render() {
    const { deal, backLabel } = this.props;
    if (!deal) return null;

    return (
      <DealHeroCard
        title={deal.name}
        dealMetricList={getMetricList(deal)}
        topButtons={[
          {
            label: backLabel
            , iconName: "arrow_forward"
            , onClick: () => this.props.history.goBack()
          }
        ]}
      />
    );
  }
}
