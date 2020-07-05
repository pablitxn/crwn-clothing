// Redux Ducks
import homeDuck from "state/auth";

export const SHOP_DATA_REQUEST = homeDuck.defineType("SHOP_DATA_REQUEST");
export const SHOP_DATA_SUCCESS = homeDuck.defineType("SHOP_DATA_SUCCESS");
export const SHOP_DATA_FAILURE = homeDuck.defineType("SHOP_DATA_FAILURE");
