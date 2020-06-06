import {getActiveMonthsRanges} from 'utils/getActiveMonthsRanges';
const monthsNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getActiveMonthsStr = activeMonths => {
  const monthsRanges = getActiveMonthsRanges(activeMonths);

  let activeMonthsStr = '';
  for (let i = 0; i < monthsRanges.length; i++) {
    const range = monthsRanges[i];
    for (let j = 0; j < range.length; j++) {
      const name = monthsNames[range[j]];
      range[j] = name;
    }
    const rangeStr = range.toString().replace(/,/g, ' - ');
    if (i !== monthsRanges.length - 1) {
      activeMonthsStr = activeMonthsStr.concat(rangeStr + ', ');
    } else {
      activeMonthsStr = activeMonthsStr.concat(rangeStr);
    }
  }

  if (activeMonthsStr === 'January - December') {
    activeMonthsStr = 'All Year';
  }
  return activeMonthsStr;
};
