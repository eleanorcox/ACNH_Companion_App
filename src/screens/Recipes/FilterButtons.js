import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from 'styles/recipesStyles';

const sourcesFilters = [
  'Balloons',
  'Smug villagers',
  // 'Lazy villagers',
  // 'Big Sister villagers',
  // 'Celeste',
  // 'Cranky villagers',
  // 'Snooty villagers',
  // 'Nook Miles Exchange',
  // 'Peppy villagers',
  // 'Normal villagers',
  // 'Jock villagers',
  // 'Isabelle',
  // 'Villager House Development (Tom Nook)',
  // 'Tom Nook',
  // 'All Villagers',
  // "Nook's Cranny",
  // 'Tom Nook (Story)',
  // 'Zipper',
  // 'All villagers',
  // 'Egg bottle',
  // 'Egg balloon',
  // 'Collecting earth eggs',
  // 'Learning all egg outfit DIYs',
  // 'Digging up clams',
  // 'Blathers',
  // 'Snowboy',
  // 'Fishing up trash',
  // 'Breaking 100 axes',
  // 'Completing bug Critterpedia',
  // 'Completing fish Critterpedia',
  // 'Helping Gulliver 30 times',
  // 'Shooting 300 balloons',
  // '5-star town evaluation',
  // 'Big sister villagers',
  // 'Collecting leaf eggs',
  // 'All Villagers (while stung)',
  // 'Fishing up a boot',
  // 'Fishing up an empty can',
  // 'Collecting sky eggs',
  // 'Collecting stone eggs',
  // 'Fishing up three old tires',
  // 'Fishing up an old tire',
  // 'Fishing up all 3 trash items',
  // 'Collecting water eggs',
  // 'Harvey',
  // 'Cyrus',
  // 'Collecting wood eggs',
];
const categoriesFilters = [
  'Bags',
  'Housewares',
  'Dresses',
  'Headwear',
  'Rugs',
  'Umbrellas',
  'Wallpaper',
  'Shoes',
  'Miscellaneous',
  'Tools',
  'Floors',
  'Fencing',
  'Wall-mounted',
  'Other',
  'Bottoms',
  'Accessories',
  'Tops',
];
const materialsFilters = [
  'acorn',
  'softwood',
  'iron nugget',
  // 'hardwood',
  // 'apple',
  // 'wood',
  // 'star fragment',
  // 'Aquarius fragment',
  // 'gold nugget',
  // 'stone',
  // 'Aries fragment',
  // 'clay',
  // 'maple leaf',
  // 'clump of weeds',
  // 'flimsy axe',
  // 'bamboo piece',
  // 'young spring bamboo',
  // 'bamboo shoot',
  // 'wasp nest',
  // 'red ornament',
  // 'blue ornament',
  // 'gold ornament',
  // 'cherry-blossom petal',
  // 'blue roses',
  // 'campfire',
  // 'cherry-blossom bonsai',
  // 'pine bonsai tree',
  // 'flimsy shovel',
  // 'log stakes',
  // 'earth egg',
  // 'stone egg',
  // 'leaf egg',
  // 'wood egg',
  // 'sky egg',
  // 'water egg',
  // 'wobbling Zipper toy',
  // 'tree branch',
  // 'Cancer fragment',
  // 'Capricorn fragment',
  // 'cardboard box',
  // 'cherry',
  // 'black cosmos',
  // 'purple mums',
  // 'pink mums',
  // 'purple roses',
  // 'black roses',
  // 'purple tulips',
  // 'pink tulips',
  // 'orange tulips',
  // 'purple windflowers',
  // 'book',
  // 'coconut',
  // 'blue hyacinths',
  // 'pink hyacinths',
  // 'orange hyacinths',
  // 'orange pansies',
  // 'blue pansies',
  // 'purple pansies',
  // 'blue windflowers',
  // 'pink windflowers',
  // 'white windflowers',
  // 'red cosmos',
  // 'yellow cosmos',
  // 'white cosmos',
  // 'pink cosmos',
  // 'large star fragment',
  // 'pink lilies',
  // 'orange lilies',
  // 'white lilies',
  // 'pink roses',
  // 'orange roses',
  // 'black lilies',
  // 'black tulips',
  // 'mini DIY workbench',
  // 'scattered papers',
  // 'yellow lilies',
  // 'red mums',
  // 'yellow roses',
  // 'manila clam',
  // 'flimsy fishing rod',
  // 'red roses',
  // 'white liles',
  // 'rare mushroom',
  // 'round mushroom',
  // 'skinny mushroom',
  // 'flat mushroom',
  // 'elegant mushroom',
  // 'fossil',
  // 'drinking fountain',
  // 'large snowflake',
  // 'snowflake',
  // 'pear',
  // 'orange',
  // 'peach',
  // 'empty can',
  // 'boot',
  // 'old tire',
  // 'white hyacinths',
  // 'Gemini fragment',
  // 'Papa bear',
  // 'Mama bear',
  // 'Baby bear',
  // 'gold roses',
  // 'screen wall',
  // 'axe',
  // 'net',
  // 'fishing rod',
  // 'shovel',
  // 'slingshot',
  // 'watering can',
  // 'weed',
  // 'branch',
  // 'red hyacinths',
  // 'yellow hyacinths',
  // 'purple hyacinths',
  // 'ironwood dresser',
  // 'cutting board',
  // 'pine cone',
  // 'Leo fragment',
  // 'Libra fragment',
  // 'red lilies',
  // 'log bench',
  // 'log chair',
  // 'orange cosmos',
  // 'lucky cat',
  // 'magazine',
  // 'bells',
  // 'yellow mums',
  // 'white mums',
  // 'log stool',
  // 'green mums',
  // 'flimsy net',
  // 'oil barrel',
  // 'red pansies',
  // 'yellow pansies',
  // 'white pansies',
  // 'zen cushion',
  // 'Pisces fragment',
  // 'rocket',
  // 'gold armor',
  // 'rusted part',
  // 'white roses',
  // 'Sagittarius fragment',
  // 'sea snail',
  // 'venus comb',
  // 'sand dollar',
  // 'coral',
  // 'giant clam',
  // 'cowrie',
  // 'document stack',
  // 'Scorpius fragment',
  // 'conch',
  // 'summer shell',
  // 'sandy-beach flooring',
  // 'upright piano',
  // 'painting set',
  // 'Taurus fragment',
  // 'red tulips',
  // 'yellow tulips',
  // 'white tulips',
  // 'Virgo fragment',
  // 'flimsy watering can',
  // 'wedding flower stand',
  // 'red windflowers',
  // 'orange windflowers',
  // 'wooden-block toy',
];
const otherFilters = ['Favourites', 'Learned'];

export const FilterButtons = ({changeFilter, currentFilters}) => {
  const currentSourcesFilters = [];
  const currentCategoriesFilters = [];
  const currentMaterialsFilters = [];
  const currentOtherFilters = [];

  for (let i = 0; i < currentFilters.length; i++) {
    const filterType = currentFilters[i][0];
    if (filterType === 'sources') {
      currentSourcesFilters.push(currentFilters[i][1]);
    } else if (filterType === 'categories') {
      currentCategoriesFilters.push(currentFilters[i][1]);
    } else if (filterType === 'materials') {
      currentMaterialsFilters.push(currentFilters[i][1]);
    } else if (filterType === 'other') {
      currentOtherFilters.push(currentFilters[i][1]);
    }
  }

  let sourcesButtons = sourcesFilters.map(filter => {
    const pressed = currentSourcesFilters.includes(filter);
    return (
      <TouchableOpacity
        onPress={() => {
          changeFilter(['sources', filter]);
        }}
        style={pressed ? styles.buttonPressed : styles.buttonUnpressed}>
        <Text>{filter}</Text>
      </TouchableOpacity>
    );
  });

  let categoriesButtons = categoriesFilters.map(filter => {
    const pressed = currentCategoriesFilters.includes(filter);
    return (
      <TouchableOpacity
        onPress={() => {
          changeFilter(['categories', filter]);
        }}
        style={pressed ? styles.buttonPressed : styles.buttonUnpressed}>
        <Text>{filter}</Text>
      </TouchableOpacity>
    );
  });

  let materialsButtons = materialsFilters.map(filter => {
    const pressed = currentMaterialsFilters.includes(filter);
    return (
      <TouchableOpacity
        onPress={() => {
          changeFilter(['materials', filter]);
        }}
        style={pressed ? styles.buttonPressed : styles.buttonUnpressed}>
        <Text>{filter}</Text>
      </TouchableOpacity>
    );
  });

  let otherButtons = otherFilters.map(filter => {
    const pressed = currentOtherFilters.includes(filter);
    return (
      <TouchableOpacity
        onPress={() => {
          changeFilter(['other', filter]);
        }}
        style={pressed ? styles.buttonPressed : styles.buttonUnpressed}>
        <Text>{filter}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <View>
      <View style={styles.buttons}>{sourcesButtons}</View>
      <View style={styles.buttons}>{categoriesButtons}</View>
      <View style={styles.buttons}>{materialsButtons}</View>
      <View style={styles.buttons}>{otherButtons}</View>
    </View>
  );
};
