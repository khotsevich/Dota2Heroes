import { useDispatch, useSelector } from 'react-redux'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { Hero } from '../components/Hero'
import { fetchHeroes } from '../store/actions'

export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const heroes = useSelector(state => state.main.heroes)
  const loading = useSelector(state => state.main.loading)

  useEffect(() => {
    dispatch(fetchHeroes())
  }, [dispatch])

  const openHeroHandler = hero => {
    navigation.navigate('Hero', { heroId: hero.id })
  }

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={heroes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Hero hero={item} onOpen={openHeroHandler} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
