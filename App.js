import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { AppLoading } from 'expo'
import { createStackNavigator } from '@react-navigation/stack'

import { HeroScreen } from './src/screens/HeroScreen'
import { bootstrap } from './src/bootstrap'
import { MainScreen } from './src/screens/MainScreen'
import store from './src/store/store'

export default function App() {
  const [isReady, setIsReady] = useState(false)
  const Stack = createStackNavigator()

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={e => console.log(e)}
      />
    )
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Main'}>
          <Stack.Screen
            name={'Main'}
            component={MainScreen}
            options={{ title: 'Dota 2 Heroes' }}
          />
          <Stack.Screen name={'Hero'} component={HeroScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
