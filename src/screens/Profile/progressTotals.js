const recipes = require('@nooksbazaar/acdb/recipes.json');
export const totalRecipes = recipes.length;

const creatures = require('@nooksbazaar/acdb/creatures.json');
const fish = [];
const bugs = [];

for (let i = 0; i < creatures.length; i++) {
  const type = creatures[i].sourceSheet;
  if (type === 'Bugs') {
    bugs.push(creatures[i]);
  } else if (type === 'Fish') {
    fish.push(creatures[i]);
  }
}
export const totalFish = fish.length;
export const totalBugs = bugs.length;
