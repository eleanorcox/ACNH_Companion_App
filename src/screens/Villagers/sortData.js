export const sortData = (villagerList, sortBy, asc, favourites, residents) => {
  let villagerListCopy = [...villagerList];
  const favouritesCopy = [...favourites];
  const residentsCopy = [...residents];

  if (sortBy === 'Name') {
    villagerListCopy.sort((a, b) => {
      return a.name > b.name ? asc : -asc;
    });
  } else if (sortBy === 'Species') {
    villagerListCopy.sort((a, b) => {
      return a.species > b.species
        ? asc
        : a.species === b.species
        ? a.name > b.name
          ? 1
          : -1
        : -asc;
    });
  } else if (sortBy === 'Gender') {
    villagerListCopy.sort((a, b) => {
      return a.gender > b.gender
        ? asc
        : a.gender === b.gender
        ? a.name > b.name
          ? 1
          : -1
        : -asc;
    });
  } else if (sortBy === 'Personality') {
    villagerListCopy.sort((a, b) => {
      return a.personality > b.personality
        ? asc
        : a.personality === b.personality
        ? a.name > b.name
          ? 1
          : -1
        : -asc;
    });
  } else if (sortBy === 'Birthday') {
    villagerListCopy.sort((a, b) => {
      return a.birthday > b.birthday
        ? asc
        : a.birthday === b.birthday
        ? a.name > b.name
          ? 1
          : -1
        : -asc;
    });
  } else if (sortBy === 'Favourites') {
    favouritesCopy.sort((a, b) => {
      return a.name > b.name ? asc : -asc;
    });

    // Remove favourites from villagerListCopy
    for (let i = 0; i < favouritesCopy.length; i++) {
      const index = villagerListCopy.indexOf(favouritesCopy[i]);
      villagerListCopy.splice(index, 1);
    }

    villagerListCopy.sort((a, b) => {
      return a.name > b.name ? asc : -asc;
    });
    favouritesCopy.push(...villagerListCopy);
    villagerListCopy = favouritesCopy;
  } else if (sortBy === 'Residents') {
    residentsCopy.sort((a, b) => {
      return a.name > b.name ? asc : -asc;
    });

    // Remove residents from villagerListCopy
    for (let i = 0; i < residentsCopy.length; i++) {
      const index = villagerListCopy.indexOf(residentsCopy[i]);
      villagerListCopy.splice(index, 1);
    }

    villagerListCopy.sort((a, b) => {
      return a.name > b.name ? asc : -asc;
    });
    residentsCopy.push(...villagerListCopy);
    villagerListCopy = residentsCopy;
  }

  return villagerListCopy;
};
