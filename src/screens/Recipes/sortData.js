export const sortData = (recipeList, sortBy, asc, favourites, learned) => {
  let recipeListCopy = [...recipeList];
  const favouritesCopy = [...favourites];
  const learnedCopy = [...learned];

  if (sortBy === 'Name') {
    recipeListCopy.sort((a, b) => {
      return a.name > b.name ? asc : -asc;
    });
  } else if (sortBy === 'Sources') {
    recipeListCopy.sort((a, b) => {
      return a.source[0] > b.source[0]
        ? asc
        : a.source[0] === b.source[0]
        ? a.name > b.name
          ? 1
          : -1
        : -asc;
    });
  } else if (sortBy === 'Category') {
    recipeListCopy.sort((a, b) => {
      return a.category > b.category
        ? asc
        : a.category === b.category
        ? a.name > b.name
          ? 1
          : -1
        : -asc;
    });
  } else if (sortBy === 'Favourites') {
    favouritesCopy.sort((a, b) => {
      return a.name > b.name ? asc : -asc;
    });

    // Remove favourites from recipeListCopy
    for (let i = 0; i < favouritesCopy.length; i++) {
      const index = recipeListCopy.indexOf(favouritesCopy[i]);
      recipeListCopy.splice(index, 1);
    }

    recipeListCopy.sort((a, b) => {
      return a.name > b.name ? asc : -asc;
    });
    favouritesCopy.push(...recipeListCopy);
    recipeListCopy = favouritesCopy;
  } else if (sortBy === 'Learned') {
    learnedCopy.sort((a, b) => {
      return a.name > b.name ? asc : -asc;
    });

    // Remove learned from recipeListCopy
    for (let i = 0; i < learnedCopy.length; i++) {
      const index = recipeListCopy.indexOf(learnedCopy[i]);
      recipeListCopy.splice(index, 1);
    }

    recipeListCopy.sort((a, b) => {
      return a.name > b.name ? asc : -asc;
    });
    learnedCopy.push(...recipeListCopy);
    recipeListCopy = learnedCopy;
  }

  return recipeListCopy;
};
