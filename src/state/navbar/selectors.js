// Redux
import { createSelector } from "reselect";

// Reducers
const HomeReducer = ({ home }) => home;

export const ShopDataSelector = createSelector([HomeReducer], home => home.shop_data);
