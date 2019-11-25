import { TypedUseSelectorHook, useDispatch as useDispatchGeneric, useSelector as useSelectorGeneric } from "react-redux";
import { ThunkDispatch } from 'redux-thunk'
import { Action } from "redux";
import { AppState } from "./index";
import { CartActionTypes } from "./cart/types";
export const useSelector: TypedUseSelectorHook<AppState > = useSelectorGeneric;

type Dispatch = ThunkDispatch<AppState, null, Action<string>>;

export const useRows = () => useSelector(state => state.cart.rows);
export const useToPay = () => useSelector(state => state.cart.toPay);
export const useDispatch = () => useDispatchGeneric<Dispatch>();
