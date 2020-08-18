import shopDuck from "state/shop";
import * as types from "state/shop/types";

export const sectionsRequest = shopDuck.createAction(types.SECTIONS_REQUEST);
export const sectionsSuccess = shopDuck.createAction(types.SECTIONS_SUCCESS);
export const sectionsFailure = shopDuck.createAction(types.SECTIONS_FAILURE);

export const productsRequest = shopDuck.createAction(types.PRODUCTS_REQUEST);
export const productsSuccess = shopDuck.createAction(types.PRODUCTS_SUCCESS);
export const productsFailure = shopDuck.createAction(types.PRODUCTS_FAILURE);

//Clear duck:
export const clearDuck = shopDuck.createAction(types.CLEAR_SHOP_DUCKS);
