// // This follows the ducks-modular-redux pattern to reduce number of files

// const INITIAL_STATE = {
//     currentVillagerFilters: [],
//     possibleVillagerFilters: {
//         gender: ["Male", "Female"],
//         species: ["Alligator", "Bear", "Bird", "Bull", "Cat", "Chicken", "Cow", "Cub", "Deer", "Dog", "Duck", "Eagle", "Elephant", "Frog", "Goat", "Gorilla", "Hamster", "Hippo", "Horse", "Kangaroo", "Koala", "Lion", "Monkey", "Mouse", "Octopus", "Ostrich", "Penguin", "Pig", "Rabbit", "Rhino", "Sheep", "Squirrel", "Tiger", "Wolf"],
//         personality: ["Big Sister", "Cranky", "Jock", "Lazy", "Normal", "Peppy", "Smug", "Snooty"]
//     },
// };

// // Action Types
// const VILLAGER_FILTER = "VILLAGER_FILTER"

// // Reducers
// const reducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case VILLAGER_FILTER:
//             // Pulls current and possible out of previous state
//             // We do not want to alter state directly in case
//             // Another action is altering it at the same time
//             const {
//                 current,
//                 possible,
//             } = state;
            
//             const addedFilter = 
//             // And put friend in friends.current
//             current.push(addedFriend);

//             //Finally, update out redux state
//             const newState = {current, possible};
//             return newState;
//         default: return state;
//     }
// };

// // Action Creators
// export const updateVillagerFilters = filter => (
//     {
//         type: VILLAGER_FILTER,
//         payload: filter,
//     }
// );

// export default reducer;