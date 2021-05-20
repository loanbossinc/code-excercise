import pluralize from 'pluralize';

export const pluralizeLoan = (list) => pluralize('loan', list.length || 0);
export const pluralizeHedge = (list) => pluralize('hedge', list.length || 0);
