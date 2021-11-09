import { types } from '../type/types'

const initialState = {
  restaurants: []
}

const restaurantsReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.restaurantsLoad:
      return {
        restaurants: [...action.payload]
      };

    default:
      return state;
  }

}

export default restaurantsReducer;