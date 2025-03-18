import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Person from './assets/person.png'
import Icon from './assets/icon.png'
import Man from './assets/man.png'
import Woman from './assets/woman.png'

const data = [
  {
    id: 1,
    title: 'Exercise',
    subTitle: '12 Tasks',
    image: Man
  },
  {
    id: 2,
    title: 'Study',
    subTitle: '12 Tasks',
    image: Woman
  }
]

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Hello , It's Derrick!</Text>
          <Text style={styles.subText}>14 Task Today</Text>
        </View>
        <View style={styles.profileIcon}>
          <Image source={require('./assets/person.png')} />
        </View>

      </View>

      <View style={styles.filterContainer}>
        <TextInput
          placeholder='Search'
          style={styles.input}
          placeholderTextColor='black'

        />
        <View style={styles.filter}>

        </View>
      </View>
      <Feather name='search' size={18} color='black' style={styles.searchIcon} />
      <Image source={require('./assets/icon.png')} />
      <Text style={styles.categories}>Categories</Text>

      <View style={styles.filterContainer}>
        <FlatList
          data={element}
          renderItem={({ item }) => (
            <View style={styles.one}>
              <Text style={styles.flatTitle}>{item.title}</Text>
              <Text style={styles.subTitle}>{item.subTitle}</Text>
              <Image source={item.image} style={styles.renderImage} />
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}

        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  profileIcon: {
    with: 50,
    height: 52,
    backgroundColor: 'white',
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  subText: {
    fontSize: 12,
    fontWeight: 'medium'
  },
  header: {
    display: 'flex',
    marginLeft: 20,
    marginRight: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  input: {
    width: 200,
    height: 48,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingLeft: 45
  },
  filter: {
    width: 50,
    height: 48,
    backgroundColor: '#FE522F',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  filterContainer: {
    display: 'flex',
    maginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchIcon: {
    position: 'absolute',
    top: 156,
    left: 31,
  },
  categories: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 20
  },
  one: {
    width: 186,
    height: 192,
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 24
  },
  flatContainer: {
    marginTop: 12

  },
  flatTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 14,
    marginLeft: 16
  },
  flatTitle: {
    fontSize: 12,
    marginLeft: 16
  },
  renderImage: {
    marginLeft: 21
  }

});
