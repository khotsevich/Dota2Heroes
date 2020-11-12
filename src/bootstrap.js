import * as Font from 'expo-font'

export const bootstrap = async () => {
  await Font.loadAsync({
    'dosis-regular': require('../assets/fonts/Dosis-Regular.ttf'),
    'dosis-bold': require('../assets/fonts/Dosis-Bold.ttf'),
    'dosis-light': require('../assets/fonts/Dosis-Light.ttf')
  })
}
