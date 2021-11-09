import { types } from "../type/types";

export const restaurantsAction = (restaurants) => {
  return {
    type: types.restaurantsLoad,
    payload: restaurants
  }
}