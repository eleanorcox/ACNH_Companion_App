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
import {getActiveMonthsRanges} from 'utils/getActiveMonthsRanges';

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
    const currentMonth = new Date().getMonth(); //TODO: state
    const currentHour = new Date().getHours(); //TODO: get from state?
    const hemisphere = 'northern'; // TODO: get this from state

    for (let i = 0; i < timeFilters.length; i++) {
      if (timeFilters[i] === 'Catch Now!') {
        filteredBugs = filteredBugs.filter(bug => {
          const activeMonths = bug.activeMonths[hemisphere];
          for (let j = 0; j < activeMonths.length; j++) {
            const month = activeMonths[j].month - 1; //0-indexing
            const activeInCurrentMonth = month === currentMonth;
            if (!activeInCurrentMonth) {
              continue;
            }

            const hours = activeMonths[j].activeHours;
            let activeInCurrentHour = false;
            if (activeMonths[j].isAllDay) {
              activeInCurrentHour = true;
            } else {
              for (let k = 0; k < hours.length; k++) {
                const overnight = hours[k][1] - hours[k][0]; //Checks if hours passes midnight, requiring different calculation
                if (overnight > 0) {
                  const withinHours =
                    hours[k][0] <= currentHour && currentHour <= hours[k][1];
                  if (withinHours) {
                    activeInCurrentHour = withinHours;
                  }
                } else if (overnight < 0) {
                  const withinHours =
                    hours[k][0] <= currentHour || currentHour <= hours[k][1];
                  if (withinHours) {
                    activeInCurrentHour = withinHours;
                  }
                }
              }
            }
            return activeInCurrentMonth && activeInCurrentHour;
          }
        });
      }
      if (timeFilters[i] === 'New This Month') {
        filteredBugs = filteredBugs.filter(bug => {
          const activeMonths = bug.activeMonths[hemisphere];
          const ranges = getActiveMonthsRanges(activeMonths);

          // Filter out bugs that are active all year
          if (ranges[0][0] === 0 && ranges[0][1] === 11) {
            return false;
          }

          let newThisMonth = false;
          for (let j = 0; j < ranges.length; j++) {
            if (ranges[j][0] === currentMonth) {
              newThisMonth = true;
            }
          }
          return newThisMonth;
        });
      }
      if (timeFilters[i] === 'Last Chance') {
        filteredBugs = filteredBugs.filter(bug => {
          const activeMonths = bug.activeMonths[hemisphere];
          const ranges = getActiveMonthsRanges(activeMonths);

          // Filter out bugs that are active all year
          if (ranges[0][0] === 0 && ranges[0][1] === 11) {
            return false;
          }

          let lastChance = false;
          for (let j = 0; j < ranges.length; j++) {
            const lastIndex = ranges[j].length - 1;
            if (ranges[j][lastIndex] === currentMonth) {
              lastChance = true;
            }
          }
          return lastChance;
        });
      }
    }
  }

  return filteredBugs;
};
