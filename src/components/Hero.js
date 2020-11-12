import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export const Hero = ({ hero, onOpen }) => {
  return (
    <TouchableOpacity onPress={() => onOpen(hero)}>
      <View style={styles.container}>
        <Text style={styles.name}>{hero.localized_name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  name: {
    fontSize: 24,
    fontFamily: 'dosis-regular'
  }
})
