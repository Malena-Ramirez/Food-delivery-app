import { types } from "../type/types";

export const deliveryAction = (deliveries) => {
  return {
    type: types.deliveryStatusLoad,
    payload: deliveries
  }
}