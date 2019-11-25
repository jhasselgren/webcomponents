import { Action } from "redux";
import { addRow } from "./cart/actions";
import { AppState } from "./index";
import { Row } from "./cart/types";
import { ThunkAction } from "redux-thunk";

export const thunkAddRow = (
  row: Row
): ThunkAction<void, AppState,null,Action<string>> => async dispatch => {
  const newRow = await addRowApi(row)
  console.log("new row", newRow)
  dispatch(addRow(newRow))
}

const addRowApi = (row: Row) : Promise<Row> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(row)
    }, 300)
  })
} 