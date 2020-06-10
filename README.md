
# 'Animal Crossing: New Horizons' Companion App

A React Native mobile app that acts as a companion for Animal Crossing: New Horizons. An MVP is currently in review to be released on the Google Play Store and I am continually adding new features.

## Features

**Home Screen**: Based on the UI of the in-game mobile device, the home screen allows users to navigate between all other screens. Some icons (Profile, Critters, Recipes, Items) were taken from the game, whereas others (Villagers, Museum, Daily Checklist, Stalk Market, Guides) I created myself using assets from AC:NH.

**Profile Screen**: The profile screen allows users to fill out information about their player and town. This includes their name, their island name, their native fruit, the hemisphere their island is in, and their Nintendo Switch code (used for online multiplayer). The profile screen also displays information about their town's residents as selected from the villagers screen, as well as any upcoming birthdays. Finally, users can see progress trackers for various collectables in the game: bugs, fish, fossils and art for the Museum, and the number of DIY recipes they have learned.

**Villagers Screen**: This screen allows users to browse all available villagers in the game. They can filter, sort and search the list. They can also add villagers to 'favourites' and 'residents'. Each villager has certain information displayed, such as their name, icon and personality type. More information is available by clicking the ellipses button on a villager card.

**Critters Screen**: Critters can be divided into Bugs and Fish, and each can be accessed by tabbing between them. Users can filter, sort and search the critter lists, and add critters to 'caught' and 'donated' (to the museum). Critters can also be filtered by which are available at different times of the day. 

**Museum Screen**: The Museum can be divided further into Fossils and Art, again accessed by tabbing between. Users can search for fossils/art. This has slightly reduced usability compared to villagers, critters and recipes due to how the in-game items are implemented.

**Recipes Screen**: This screen allows users to browse available recipes in the game. They can add recipes to 'favourites' or 'learned'. Recipes display their name, source, notes, category and crafting materials.

## Upcoming Features

Some screens on the app show an 'under construction' message. These are planned for future releases but not currently implemented.

**Items Screen**: Similar to the recipes screen, this will allow users to browse all available in-game items.

**Daily Checklist**: This screen will feature a checklist of tasks that users want to complete every day. In AC:NH you live in a virtual town and every day new tasks reset and are available again, such as talking to every resident in your town, or breaking the rocks in your town. This list will be editable as individual players may decide to do/not do every possible task, or may have tasks linked to their specific play-style.

**Stalk Market**: AC:NH has an in-game stock market known as the stalk market, where you buy and sell turnips. This screen will allow users to keep track of the buy prices for turnips during the week. Based on prices every day, a player's stock market may be following certain patterns, so this screen will aim to calculate for the player the likelihood of each pattern and the potential highest sell price of the week, as well as advise when to hold or when to sell their turnips.

**Guides Screen**: This screen will open into another selection screen, featuring guides for in-game features. Examples of such guides would be for flower breeding, or for Mystery Island types.

## Screenshots

![Home Screen](/git_images/Home1.0.1.png)

![Profile Screen](/git_images/Profile1.0.0.png)

![Villagers Screen](/git_images/Villagers1.0.0.png)

![Critters Screen](/git_images/Critters1.0.0.png)

![Museum Screen](/git_images/Museum1.0.1.png)

![Recipes Screen](/git_images/Recipes1.0.1.png)

## Release Notes

### 1.0.0

- Implemented Home Screen
- Implemented Profile Screen
- Implemented Villagers Screen
- Implemented Critters Screen
- Implemented Museum Screen
- Implemented Recipes Screen
- Items, Daily Checklist, Stalk Market and Guides screen all show 'Under Construction' message

### 1.0.1

- Bug fix: Fixed bug where closing/re-opening the app would cause data stored in redux to not be considered the same as data pulled from the API. For example, if a user had 'caught' an Anchovy, then when the app was closed and re-opened this Anchovy would be in both 'caught' and 'uncaught'
- Bug fix: Villager birthdays did not display even if there was an upcoming birthday this month
- Other minor bug fixes
- UX: Users can not click back button to close list controls (villagers, critters, recipes)
- Other minor UI/UX tweaks
