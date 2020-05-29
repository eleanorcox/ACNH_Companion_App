export const sortData = (fishList, sortBy, asc, caught, donated) => {
  let fishListCopy = [...fishList];
  const caughtCopy = [...caught];
  const donatedCopy = [...donated];

  if (sortBy === 'Name') {
    fishListCopy.sort((a, b) => {
      return a.name > b.name ? asc : -asc;
    });
  } else if (sortBy === 'Critterpedia') {
    fishListCopy.sort((a, b) => {
      return asc * (a.num - b.num);
    });
  } else if (sortBy === 'Price') {
    fishListCopy.sort((a, b) => {
      return a.sell === b.sell
        ? a.name > b.name
          ? 1
          : -1
        : asc * (a.sell - b.sell);
    });
  } else if (sortBy === 'Caught') {
    caughtCopy.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });

    // Remove caught from fishListCopy
    for (let i = 0; i < caughtCopy.length; i++) {
      const index = fishListCopy.indexOf(caughtCopy[i]);
      fishListCopy.splice(index, 1);
    }

    fishListCopy.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });

    if (asc === 1) {
      caughtCopy.push(...fishListCopy);
      fishListCopy = caughtCopy;
    } else if (asc === -1) {
      fishListCopy.push(...caughtCopy);
    }
  } else if (sortBy === 'Donated') {
    donatedCopy.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });

    // Remove donated from fishListCopy
    for (let i = 0; i < donatedCopy.length; i++) {
      const index = fishListCopy.indexOf(donatedCopy[i]);
      fishListCopy.splice(index, 1);
    }

    fishListCopy.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });

    if (asc === 1) {
      donatedCopy.push(...fishListCopy);
      fishListCopy = donatedCopy;
    } else if (asc === -1) {
      fishListCopy.push(...donatedCopy);
    }
  }

  return fishListCopy;
};
