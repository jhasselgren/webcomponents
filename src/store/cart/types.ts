export interface Row {
  itemNo: string;
  item: string;
  quantity: number;
  price: number;
}

export interface CartState {
  rows: Row[]
  toPay: number

}

export const ADD_ROW = 'ADD_ROW'
export const ROW_ADDED = 'ROW_ADDED'
export const UPDATE_ROW = 'UPDATE_ROW'
export const ROW_UPDATED = 'ROW_UPDATED'

interface AddRowAction{
  type: typeof ADD_ROW,
  payload: Row
}

interface RowAddedSuccessAction{
  type: typeof ROW_ADDED,
  status: 'ok',
  payload: Row
}

interface RowAddedFailedAction{
  type: typeof ROW_ADDED,
  status: 'error',
  error: Error
}

interface UpdateRowAction {
  type: typeof UPDATE_ROW,
  payload: {
    item: string,
    quantity: number
  }
}

interface RowUpdatedSuccessAction{
  type: typeof ROW_UPDATED,
  status: 'ok'
  payload: Row
}

interface RowUpdatedFailedAction{
  type: typeof ROW_UPDATED,
  status: 'error'
  error: Error
}

export type CartActionTypes = 
  AddRowAction | RowAddedSuccessAction | RowAddedFailedAction |
  UpdateRowAction | RowUpdatedSuccessAction | RowUpdatedFailedAction