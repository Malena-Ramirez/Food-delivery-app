import { types } from '../type/types'

const initialState = {
  restaurantSearch: ''
}

const restaurantSearchReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.restaurantSearch:
      return {
        restaurantSearch: action.payload
      };

    default:
      return state;
  }

}

export default restaurantSearchReducer;