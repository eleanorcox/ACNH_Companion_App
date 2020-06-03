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

export const filterData = (
  allFish,
  filters,
  query,
  caught,
  donated,
  hemisphere,
) => {
  let filteredFish = allFish;
  const monthFilters = [];
  const timeFilters = [];
  const shadowFilters = [];
  const locationFilters = [];
  const otherFilters = [];

  for (let i = 0; i < filters.length; i++) {
    const filterType = filters[i][0];
    if (filterType === 'month') {
      monthFilters.push(filters[i][1]);
    } else if (filterType === 'time') {
      timeFilters.push(filters[i][1]);
    } else if (filterType === 'shadow') {
      shadowFilters.push(filters[i][1]);
    } else if (filterType === 'location') {
      locationFilters.push(filters[i][1]);
    } else if (filterType === 'other') {
      otherFilters.push(filters[i][1]);
    }
  }

  if (query !== '') {
    query = query.toUpperCase();
    filteredFish = filteredFish.filter(fish => {
      const fishName = fish.name.toUpperCase();
      return fishName.includes(query);
    });
  }

  if (otherFilters.length > 0) {
    for (let i = 0; i < otherFilters.length; i++) {
      if (otherFilters[i] === 'Caught') {
        filteredFish = filteredFish.filter(fish => {
          return caught.includes(fish);
        });
      }
      if (otherFilters[i] === 'Donated') {
        filteredFish = filteredFish.filter(fish => {
          return donated.includes(fish);
        });
      }
    }
  }

  if (monthFilters.length > 0) {
    let temp = [];
    for (let i = 0; i < monthFilters.length; i++) {
      temp = temp.concat(
        filteredFish.filter(fish => {
          const activeMonths = fish.activeMonths[hemisphere];
          const months = [];
          for (let j = 0; j < activeMonths.length; j++) {
            const month = activeMonths[j].month;
            const monthStr = allMonths[month - 1]; //0-indexing
            months.push(monthStr);
          }
          return months.includes(monthFilters[i]);
        }),
      );
      const uniqueFish = new Set(temp);
      filteredFish = [...uniqueFish];
    }
  }

  if (shadowFilters.length > 0) {
    let temp = [];
    for (let i = 0; i < shadowFilters.length; i++) {
      temp = temp.concat(
        filteredFish.filter(fish => {
          return fish.shadow === shadowFilters[i];
        }),
      );
      filteredFish = temp;
    }
  }

  if (locationFilters.length > 0) {
    let temp = [];
    for (let i = 0; i < locationFilters.length; i++) {
      temp = temp.concat(
        filteredFish.filter(fish => {
          return fish.whereHow === locationFilters[i];
        }),
      );
      filteredFish = temp;
    }
  }

  if (timeFilters.length > 0) {
    const currentMonth = new Date().getMonth(); //TODO: state
    const currentHour = new Date().getHours(); //TODO: get from state?

    for (let i = 0; i < timeFilters.length; i++) {
      if (timeFilters[i] === 'Catch Now!') {
        filteredFish = filteredFish.filter(fish => {
          const activeMonths = fish.activeMonths[hemisphere];
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
        filteredFish = filteredFish.filter(fish => {
          const activeMonths = fish.activeMonths[hemisphere];
          const ranges = getActiveMonthsRanges(activeMonths);

          // Filter out fish that are active all year
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
        filteredFish = filteredFish.filter(fish => {
          const activeMonths = fish.activeMonths[hemisphere];
          const ranges = getActiveMonthsRanges(activeMonths);

          // Filter out fish that are active all year
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

  return filteredFish;
};
