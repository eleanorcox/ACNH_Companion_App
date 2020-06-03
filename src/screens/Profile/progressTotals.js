const recipes = require('@nooksbazaar/acdb/recipes.json');
export const totalRecipes = recipes.length;

const critters = require('@nooksbazaar/acdb/creatures.json');
const fish = critters.filter(critter => critter.sourceSheet === 'Fish');
const bugs = critters.filter(critter => critter.sourceSheet === 'Bugs');
export const totalFish = fish.length;
export const totalBugs = bugs.length;

const items = require('@nooksbazaar/acdb/items.json');
const fossils = items.filter(item => item.sourceSheet === 'Fossils');
const art = items.filter(item => item.sourceSheet === 'Art');
export const totalFossils = fossils.length;
export const totalArt = art.length;
