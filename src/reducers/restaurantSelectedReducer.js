import { types } from '../type/types'

const initialState = {
  restaurantSelected: {}
}

const restaurantSelectedReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.restaurantSelected:
      return {
        restaurantSelected: action.payload
      };

    default:
      return state;
  }

}

export default restaurantSelectedReducer;