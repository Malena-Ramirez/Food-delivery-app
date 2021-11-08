import { types } from '../type/types'

const initialState = {
  user: {}
}

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.user:
      return {
        user: action.payload.user
      };

    default:
      return state;
  }

}

export default userReducer;