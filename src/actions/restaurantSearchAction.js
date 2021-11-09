import { types } from "../type/types";

export const restaurantSearchAction = (search) => {
  return {
    type: types.restaurantSearch,
    payload: search
  }
}