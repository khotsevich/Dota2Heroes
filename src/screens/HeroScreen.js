import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { useSelector } from 'react-redux'

const defineAttr = attr => {
  switch (attr) {
    case 'agi':
      return ['green', 'Ловкость']
    case 'str':
      return ['red', 'Сила']
    case 'int':
      return ['blue', 'Интеллект']
    default:
      return ['', '']
  }
}

const defineAttackType = type => {
  return type === 'Melee' ? 'Ближний' : 'Дальний'
}

export const HeroScreen = ({ navigation, route }) => {
  const { heroId } = route.params
  const hero = useSelector(state =>
    state.main.heroes.find(h => h.id === heroId)
  )
  const [attrColor, attr] = defineAttr(hero.primary_attr)
  useEffect(() => {
    navigation.setOptions({ title: hero.localized_name })
  }, [hero])
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{hero.localized_name}</Text>
      <Text style={styles.text}>
        Основной атрибут:{' '}
        <Text style={{ ...styles.main, color: attrColor }}>{attr}</Text>
      </Text>
      <Text style={styles.text}>
        Тип атаки:{' '}
        <Text style={styles.main}>{defineAttackType(hero.attack_type)}</Text>
      </Text>
      <Text style={styles.text}>
        Роли: <Text style={styles.main}>{hero.roles.join(', ')}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15
  },
  name: {
    textAlign: 'center',
    fontFamily: 'dosis-bold',
    fontSize: 24,
    marginVertical: 20
  },
  text: {
    fontFamily: 'dosis-light',
    fontSize: 18,
    marginVertical: 10
  },
  main: {
    fontFamily: 'dosis-bold',
    fontSize: 20
  }
})
