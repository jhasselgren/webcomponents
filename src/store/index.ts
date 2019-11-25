import { cartReducer } from "./cart/reducers";
import {combineReducers } from "redux";

export const rootReducer = combineReducers({
  cart: cartReducer
})

export type AppState = ReturnType<typeof rootReducer>

export * from './thunk'
export * from './useRedux'