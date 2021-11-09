import { types } from '../type/types'

const initialState = {
  deliveryStatus: []
}

const deliveryReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.deliveryStatusLoad:
      return {
        deliveryStatus: [...action.payload]
      };

    default:
      return state;
  }

}

export default deliveryReducer;