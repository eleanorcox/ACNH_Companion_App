const allMonths = [
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

export const filterData = (listToFilter, filters, caught, donated) => {
  let filteredBugs = listToFilter;
  const monthFilters = [];
  const timeFilters = [];
  const otherFilters = [];

  for (let i = 0; i < filters.length; i++) {
    const filterType = filters[i][0];
    if (filterType === 'month') {
      monthFilters.push(filters[i][1]);
    } else if (filterType === 'time') {
      timeFilters.push(filters[i][1]);
    } else if (filterType === 'other') {
      otherFilters.push(filters[i][1]);
    }
  }

  if (otherFilters.length > 0) {
    for (let i = 0; i < otherFilters.length; i++) {
      if (otherFilters[i] === 'Caught') {
        filteredBugs = filteredBugs.filter(bug => {
          return caught.includes(bug);
        });
      }
      if (otherFilters[i] === 'Donated') {
        filteredBugs = filteredBugs.filter(bug => {
          return donated.includes(bug);
        });
      }
    }
  }

  if (monthFilters.length > 0) {
    let temp = [];
    for (let i = 0; i < monthFilters.length; i++) {
      temp = temp.concat(
        filteredBugs.filter(bug => {
          const hemisphere = 'northern'; // TODO: get this from state
          const activeMonths = bug.activeMonths[hemisphere];
          const months = [];
          for (let j = 0; j < activeMonths.length; j++) {
            const month = activeMonths[j].month;
            const monthStr = allMonths[month - 1]; //0-indexing
            months.push(monthStr);
          }
          return months.includes(monthFilters[i]);
        }),
      );
      filteredBugs = temp;
    }
  }

  //   TODO: Implement filter by 'catch now', 'last chance', 'new this month'
  if (timeFilters.length > 0) {
    let temp = [];
    for (let i = 0; i < timeFilters.length; i++) {
      temp = temp.concat(
        filteredBugs.filter(bug => {
          return bug;
          //   const hemisphere = 'northern'; // TODO: get this from state
          //   const activeMonths = bug.activeMonths[hemisphere];
          //   const months = [];
          //   for (let j = 0; j < activeMonths.length; j++) {
          //     const month = activeMonths[j].month;
          //     const monthStr = allMonths[month - 1]; //0-indexing
          //     months.push(monthStr);
          //   }
          //   return months.includes(monthFilters[i]);
        }),
      );
    }
    filteredBugs = temp;
  }

  return filteredBugs;
};
