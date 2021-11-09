import { types } from "../type/types";

export const loggedAction = () => {
  return {
    type: types.logged,
    payload: {
      logged: true
    }
  }
}