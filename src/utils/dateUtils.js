// utils/dateUtils.js
import { differenceInDays, parseISO } from 'date-fns';

export const calculateGranularity = (startDateStr, endDateStr) => {
  const startDate = parseISO(startDateStr);
  const endDate = parseISO(endDateStr);
  const days = differenceInDays(endDate, startDate);

  if (days < 31) {
    return 'day';
  } else if (days < 365) {
    return 'month';
  } else if (days < 3 * 365) {
    return 'quarter';
  } else {
    return 'year';
  }
};
