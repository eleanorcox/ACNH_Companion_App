export const updateSortAsc = (sortBy, newSortBy, sortAsc) => {
  let newSortAsc;
  if (sortBy !== newSortBy) {
    newSortAsc = 1;
  } else {
    newSortAsc = -sortAsc;
  }

  return newSortAsc;
};
