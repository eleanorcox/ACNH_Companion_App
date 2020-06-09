import {itemInList} from 'utils/itemInList';

export const filterData = (recipes, filters, query, favourites, learned) => {
  let filteredRecipes = recipes;
  let sourcesFilters = [];
  let categoriesFilters = [];
  let materialsFilters = [];
  let otherFilters = [];

  for (let i = 0; i < filters.length; i++) {
    const filterType = filters[i][0];
    if (filterType === 'sources') {
      sourcesFilters.push(filters[i][1]);
    } else if (filterType === 'categories') {
      categoriesFilters.push(filters[i][1]);
    } else if (filterType === 'materials') {
      materialsFilters.push(filters[i][1]);
    } else if (filterType === 'other') {
      otherFilters.push(filters[i][1]);
    }
  }

  if (query !== '') {
    query = query.toUpperCase();
    filteredRecipes = filteredRecipes.filter(recipe => {
      const recipeName = recipe.name.toUpperCase();
      return recipeName.includes(query);
    });
  }

  if (otherFilters.length > 0) {
    for (let i = 0; i < otherFilters.length; i++) {
      if (otherFilters[i] === 'Favourites') {
        filteredRecipes = filteredRecipes.filter(recipe => {
          return itemInList(recipe, favourites);
        });
      }
      if (otherFilters[i] === 'Learned') {
        filteredRecipes = filteredRecipes.filter(recipe => {
          return itemInList(recipe, learned);
        });
      }
    }
  }

  if (sourcesFilters.length > 0) {
    let temp = [];
    for (let i = 0; i < sourcesFilters.length; i++) {
      temp = temp.concat(
        filteredRecipes.filter(recipe => {
          return recipe.source.includes(sourcesFilters[i]);
        }),
      );
    }
    filteredRecipes = temp;
  }

  if (categoriesFilters.length > 0) {
    let temp = [];
    for (let i = 0; i < categoriesFilters.length; i++) {
      temp = temp.concat(
        filteredRecipes.filter(
          recipe => recipe.category === categoriesFilters[i],
        ),
      );
    }
    filteredRecipes = temp;
  }

  if (materialsFilters.length > 0) {
    let temp = [];
    for (let i = 0; i < materialsFilters.length; i++) {
      temp = temp.concat(
        filteredRecipes.filter(recipe => {
          const recipeMaterials = recipe.materials;
          const materialNames = Object.keys(recipeMaterials);
          return materialNames.includes(materialsFilters[i]);
        }),
      );
    }
    filteredRecipes = temp;
  }

  return filteredRecipes;
};
