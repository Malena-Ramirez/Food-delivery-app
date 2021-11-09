import { types } from "../type/types";

export const userAction = user => {
  return {
    type: types.user,
    payload: {
      user
    }
  }
}