import { types } from '../type/types'

const initialState = {
  logged: false
}

const loggedReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.logged:
      return {
        logged: action.payload.logged
      };

    default:
      return state;
  }

}

export default loggedReducer;