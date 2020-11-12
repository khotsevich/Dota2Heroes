import { FETCH_HEROES } from './types'

const initialState = {
  heroes: [],
  loading: true
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEROES:
      return { ...state, heroes: action.payload, loading: false }
    default:
      return state
  }
}
