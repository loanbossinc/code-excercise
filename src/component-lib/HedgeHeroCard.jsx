import React, { Component } from "react";
import { DealHeroCard } from '@loanbossinc/component-library';
import {getMetricList} from './heroCard_Util';

export class HedgeHeroCard extends Component {
  getMetric = (metricId) => {
    const { deal } = this.props;
    if (!deal || !deal.dealMetrics) return {};
    const found = deal.dealMetrics.find(metric => metric.metricId === metricId);
    return found || {};
  }



  render() {
    const { deal, backLabel } = this.props;
    

    return (
      <DealHeroCard
        title={!deal || deal.name}
        dealMetricList={getMetricList(deal)}
        topButtons={[
          {
            label: backLabel
            , iconName: "arrow_forward"
            , onClick: () => this.props.history.goBack()
          }
        ]}
        buttonList={[
          {
            label: "Save Changes"
            , onClick: this.props.save
          }
          , {
            label: "Reset"
            , onClick: this.props.cancel            
          }
        ]}
      />
    );
  }
}
