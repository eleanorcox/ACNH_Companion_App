import {itemInList} from 'utils/itemInList';

export const filterData = (
  villagers,
  filters,
  query,
  favourites,
  residents,
) => {
  let filteredVillagers = villagers;
  let genderFilters = [];
  let speciesFilters = [];
  let personalityFilters = [];
  let otherFilters = [];

  for (let i = 0; i < filters.length; i++) {
    const filterType = filters[i][0];
    if (filterType === 'gender') {
      genderFilters.push(filters[i][1]);
    } else if (filterType === 'species') {
      speciesFilters.push(filters[i][1]);
    } else if (filterType === 'personality') {
      personalityFilters.push(filters[i][1]);
    } else if (filterType === 'other') {
      otherFilters.push(filters[i][1]);
    }
  }

  if (query !== '') {
    query = query.toUpperCase();
    filteredVillagers = filteredVillagers.filter(villager => {
      const villagerName = villager.name.toUpperCase();
      return villagerName.includes(query);
    });
  }

  if (otherFilters.length > 0) {
    for (let i = 0; i < otherFilters.length; i++) {
      if (otherFilters[i] === 'Favourites') {
        filteredVillagers = filteredVillagers.filter(villager => {
          return itemInList(villager, favourites);
        });
      }
      if (otherFilters[i] === 'Residents') {
        filteredVillagers = filteredVillagers.filter(villager => {
          return itemInList(villager, residents);
        });
      }
    }
  }

  if (genderFilters.length > 0) {
    let temp = [];
    for (let i = 0; i < genderFilters.length; i++) {
      temp = temp.concat(
        filteredVillagers.filter(
          villager => villager.gender === genderFilters[i],
        ),
      );
    }
    filteredVillagers = temp;
  }

  if (speciesFilters.length > 0) {
    let temp = [];
    for (let i = 0; i < speciesFilters.length; i++) {
      temp = temp.concat(
        filteredVillagers.filter(
          villager => villager.species === speciesFilters[i],
        ),
      );
    }
    filteredVillagers = temp;
  }

  if (personalityFilters.length > 0) {
    let temp = [];
    for (let i = 0; i < personalityFilters.length; i++) {
      temp = temp.concat(
        filteredVillagers.filter(
          villager => villager.personality === personalityFilters[i],
        ),
      );
    }
    filteredVillagers = temp;
  }

  return filteredVillagers;
};
