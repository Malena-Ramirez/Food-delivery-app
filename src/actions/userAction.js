import { types } from "../type/types";

export const userLogged = user => {
  return {
    type: types.user,
    payload: {
      user
    }
  }
}