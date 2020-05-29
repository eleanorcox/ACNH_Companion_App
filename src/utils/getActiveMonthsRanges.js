export const getActiveMonthsRanges = activeMonths => {
  let months = [];
  for (let i = 0; i < activeMonths.length; i++) {
    const month = activeMonths[i].month;
    months.push(month - 1); //0-indexing
  }

  const ranges = [];
  for (let i = 0; i < months.length; i++) {
    if (i > 0) {
      const latest = ranges[ranges.length - 1];
      const lastNum = latest[latest.length - 1];
      if (months[i] <= lastNum) {
        continue;
      }
    }
    let d = months[i + 1] - months[i];
    if (d !== 1) {
      ranges.push([months[i]]);
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
      ranges.push(temp);
    }
  }

  // Corrects overflow at end of year, for example
  // critters that are available December-February
  // i.e. [[0,2], [11]] => [[11,2]]
  const lastIndex = ranges.length - 1;
  if (ranges[0][0] === 0 && ranges[lastIndex].includes(11)) {
    const overflow = [ranges[lastIndex][0], ranges[0][1]];
    ranges.pop();
    ranges[0] = overflow;
  }

  return ranges;
};
