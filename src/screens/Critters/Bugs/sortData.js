export const sortData = (bugList, sortBy, asc, caught, donated) => {
  let bugListCopy = [...bugList];
  const caughtCopy = [...caught];
  const donatedCopy = [...donated];

  if (sortBy === 'Name') {
    bugListCopy.sort((a, b) => {
      return a.name > b.name ? asc : -asc;
    });
  } else if (sortBy === 'Critterpedia') {
    bugListCopy.sort((a, b) => {
      return asc * (a.num - b.num);
    });
  } else if (sortBy === 'Price') {
    bugListCopy.sort((a, b) => {
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

    // Remove caught from bugListCopy
    for (let i = 0; i < caughtCopy.length; i++) {
      const index = bugListCopy.indexOf(caughtCopy[i]);
      bugListCopy.splice(index, 1);
    }

    bugListCopy.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });

    if (asc === 1) {
      caughtCopy.push(...bugListCopy);
      bugListCopy = caughtCopy;
    } else if (asc === -1) {
      bugListCopy.push(...caughtCopy);
    }
  } else if (sortBy === 'Donated') {
    donatedCopy.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });

    // Remove donated from bugListCopy
    for (let i = 0; i < donatedCopy.length; i++) {
      const index = bugListCopy.indexOf(donatedCopy[i]);
      bugListCopy.splice(index, 1);
    }

    bugListCopy.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });

    if (asc === 1) {
      donatedCopy.push(...bugListCopy);
      bugListCopy = donatedCopy;
    } else if (asc === -1) {
      bugListCopy.push(...donatedCopy);
    }
  }

  return bugListCopy;
};
