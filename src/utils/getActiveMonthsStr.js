export const getActiveMonthsStr = activeMonths => {
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

  const months = [];
  for (let i = 0; i < activeMonths.length; i++) {
    const month = activeMonths[i].month;
    months.push(month - 1); // 0-indexing
  }

  const monthsRanges = [];
  for (let i = 0; i < months.length; i++) {
    if (i > 0) {
      const latest = monthsRanges[monthsRanges.length - 1];
      const lastNum = latest[latest.length - 1];
      if (months[i] <= lastNum) {
        continue;
      }
    }
    let d = months[i + 1] - months[i];
    if (d !== 1) {
      monthsRanges.push([months[i]]);
    } else if (d === 1) {
      let temp = [months[i]];
      let j = 0;
      while (d === 1) {
        j = j + 1;
        d = months[i + j + 1] - months[i + j];
        if (d !== 1) {
          temp.push(months[i + j]);
        }
      }
      monthsRanges.push(temp);
    }
  }

  let activeMonthsStr = '';
  for (let i = 0; i < monthsRanges.length; i++) {
    const range = monthsRanges[i];
    for (let j = 0; j < range.length; j++) {
      const name = monthsNames[range[j]];
      range[j] = name;
    }
    const rangeStr = range.toString().replace(/,/g, '-');
    if (i !== monthsRanges.length - 1) {
      activeMonthsStr = activeMonthsStr.concat(rangeStr + ', ');
    } else {
      activeMonthsStr = activeMonthsStr.concat(rangeStr);
    }
  }

  if (activeMonthsStr === 'January-December') {
    activeMonthsStr = 'All Year';
  }
  return activeMonthsStr;
};
