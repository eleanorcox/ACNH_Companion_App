import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from 'styles/homeStyles';

// Icons
const profileIcon = require('assets/images/Icon_Profile.png');
const todoIcon = require('assets/images/Icon_Todo.png');
const guidesIcon = require('assets/images/Icon_Guides.png');
const stalksIcon = require('assets/images/Icon_Stalks.png');
const villagersIcon = require('assets/images/Icon_Villagers.png');
const crittersIcon = require('assets/images/Icon_Critters.png');
const museumIcon = require('assets/images/Icon_Museum.png');
const recipesIcon = require('assets/images/Icon_Recipes.png');
const catalogueIcon = require('assets/images/Icon_Catalogue.png');

const Home = ({navigation}) => {
  return (
    <View style={styles.iconsContainer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Image source={profileIcon} style={styles.icon} />
        </TouchableOpacity>
        <Text>Profile</Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Villagers');
          }}>
          <Image source={villagersIcon} style={styles.icon} />
        </TouchableOpacity>
        <Text>Villagers</Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Critters');
          }}>
          <Image source={crittersIcon} style={styles.icon} />
        </TouchableOpacity>
        <Text>Critters</Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Museum');
          }}>
          <Image source={museumIcon} style={styles.icon} />
        </TouchableOpacity>
        <Text>Museum</Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Recipes');
          }}>
          <Image source={recipesIcon} style={styles.icon} />
        </TouchableOpacity>
        <Text>Recipes</Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Items');
          }}>
          <Image source={catalogueIcon} style={styles.icon} />
        </TouchableOpacity>
        <Text>Items</Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Todo');
          }}>
          <Image source={todoIcon} style={styles.icon} />
        </TouchableOpacity>
        <Text>Daily Checklist</Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Stalks');
          }}>
          <Image source={stalksIcon} style={styles.icon} />
        </TouchableOpacity>
        <Text>Stalk Market</Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Guides');
          }}>
          <Image source={guidesIcon} style={styles.icon} />
        </TouchableOpacity>
        <Text>Guides</Text>
      </View>
    </View>
  );
};

export default Home;
