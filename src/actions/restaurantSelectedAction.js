import { types } from "../type/types";

export const restaurantSelectedAction = (restaurant) => {
  return {
    type: types.restaurantSelected,
    payload: restaurant
  }
}