// Items
const items = require('@nooksbazaar/acdb/items.json');

// Villagers
export const allVillagers = require('@nooksbazaar/acdb/villagers.json');
export const posters = items.filter(item => item.sourceSheet === 'Posters');

// Critters
const critters = require('@nooksbazaar/acdb/creatures.json');
const allBugs = critters.filter(critter => critter.sourceSheet === 'Bugs');
for (let i = 0; i < allBugs.length; i++) {
  let name = allBugs[i].name;
  name = name[0].toUpperCase() + name.substring(1);
  allBugs[i].name = name;
}
export {allBugs};

const allFish = critters.filter(critter => critter.sourceSheet === 'Fish');
for (let i = 0; i < allFish.length; i++) {
  let name = allFish[i].name;
  name = name[0].toUpperCase() + name.substring(1);
  allFish[i].name = name;
}
export {allFish};

// Museum
const allFossils = items.filter(item => item.sourceSheet === 'Fossils');
for (let i = 0; i < allFossils.length; i++) {
  let name = allFossils[i].name;
  name = name[0].toUpperCase() + name.substring(1);
  allFossils[i].name = name;
}
export {allFossils};

const allArt = items.filter(item => item.sourceSheet === 'Art');
for (let i = 0; i < allArt.length; i++) {
  let name = allArt[i].name;
  name = name[0].toUpperCase() + name.substring(1);
  allArt[i].name = name;
}
export {allArt};

// Recipes
const allRecipes = require('@nooksbazaar/acdb/recipes.json');
for (let i = 0; i < allRecipes.length; i++) {
  let name = allRecipes[i].name;
  name = name[0].toUpperCase() + name.substring(1);
  allRecipes[i].name = name;
}
export {allRecipes};

// Profile
const other = items.filter(item => item.sourceSheet === 'Other');
for (let i = 0; i < other.length; i++) {
  let name = other[i].name;
  name = name[0].toUpperCase() + name.substring(1);
  other[i].name = name;
}
const fruits = other.filter(item => {
  return (
    item.name === 'Apple' ||
    item.name === 'Cherry' ||
    item.name === 'Orange' ||
    item.name === 'Peach' ||
    item.name === 'Pear'
  );
});
const fruitImages = {};
for (let i = 0; i < fruits.length; i++) {
  fruitImages[fruits[i].name] = fruits[i].variants[0].inventoryImage;
}
export {fruitImages};

// Under Construction
const housewares = items.filter(item => item.sourceSheet === 'Housewares');
export const constructionSigns = housewares.filter(
  item => item.name === 'construction sign',
);
