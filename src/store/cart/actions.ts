import { Row, ADD_ROW, UPDATE_ROW, CartActionTypes } from "./types";

export function addRow(row: Row): CartActionTypes {
  return {
    type: ADD_ROW,
    payload: row
  }
}

export function updateRow(item: string, newQuantity: number): CartActionTypes {
  return {
    type: UPDATE_ROW,
    payload: {
      item,
      quantity: newQuantity
    }
  }
}
