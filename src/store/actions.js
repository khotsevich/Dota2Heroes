import { FETCH_HEROES } from './types'

export const fetchHeroes = () => {
  return async dispatch => {
    const response = await fetch('https://api.opendota.com/api/heroes', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await response.json()
    dispatch({ type: FETCH_HEROES, payload: data })
  }
}
