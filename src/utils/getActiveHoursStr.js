export const getActiveHoursStr = activeMonths => {
  if (activeMonths[0].isAllDay) {
    return 'All Day';
  } else {
    let times = activeMonths[0].activeHours;
    const allTimes = [];

    for (let i = 0; i < times.length; i++) {
      const startTime = times[i][0];
      const endTime = times[i][1];

      const startTime12Hr = startTime % 12;
      const endTime12Hr = endTime % 12;

      const startTimeStr =
        startTime > 12 ? `${startTime12Hr}PM` : `${startTime12Hr}AM`;
      const endTimeStr = endTime > 12 ? `${endTime12Hr}PM` : `${endTime12Hr}AM`;

      const timeRange = `${startTimeStr}-${endTimeStr}`;
      allTimes.push(timeRange);
    }

    const activeHours = allTimes.toString().replace(/,/g, '; ');
    return activeHours;
  }
};
