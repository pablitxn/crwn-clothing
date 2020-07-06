// Redux Ducks
import homeDuck from "state/home";
import * as types from "state/home/types";

export const requestShopData = homeDuck.createAction(types.SHOP_DATA_REQUEST);
export const successShopData = homeDuck.createAction(types.SHOP_DATA_SUCCESS);
export const failureShopData = homeDuck.createAction(types.SHOP_DATA_FAILURE);
