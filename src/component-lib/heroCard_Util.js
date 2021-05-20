import { DEAL_METRICS, PROPERTY_ASSET_TYPES } from "@loanbossinc/component-library";

const hasMFProperties = deal => deal.properties && deal.properties.some(p => p.assetTypeId === PROPERTY_ASSET_TYPES.MULTIFAMILY);
const hasNonMFProperties = deal => deal.properties && deal.properties.some(p => p.assetTypeId !== PROPERTY_ASSET_TYPES.MULTIFAMILY);
const getMetric = (deal, metricId) => {
  if (!deal || !deal.dealMetrics) return {};
  const found = deal.dealMetrics.find(metric => metric.metricId === metricId);
  return found || {};
};
export const getMetricList = deal => {
  if (!deal) return [];

  const metricList = [
    {
      label: "Closing Date",
      ...getMetric(deal, DEAL_METRICS.CLOSING_DATE)
    },
    {
      label: "Purchase price",
      ...getMetric(deal, DEAL_METRICS.PURCHASE_PRICE)
    }
  ];

  if (hasMFProperties(deal))
    metricList.push({
      label: "Number of units",
      ...getMetric(deal, DEAL_METRICS.MF_UNITS)
    });

  if (hasNonMFProperties(deal))
    metricList.push({
      label: "Square footage",
      ...getMetric(deal, DEAL_METRICS.SQUARE_FEET)
    });

  return metricList;
};

export default getMetricList;
