import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

export const Search = () => {
  const changeTextHandler = value => {
    console.log(value)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={changeTextHandler}
        placeholder={'Search'}
        autoCorrect={false}
        autoCapitalize={'none'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  input: {
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#eee',
    borderRadius: 20,
    paddingHorizontal: 20
  }
})
