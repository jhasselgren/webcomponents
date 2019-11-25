import { CartState, Row, CartActionTypes, ADD_ROW, UPDATE_ROW } from './types';


const initialState: CartState = {
  rows: [
    { itemNo: '100', item: 'A', quantity: 1, price:20}
  ],
  toPay: 20
};

const calcToPay = (rows: Row[]):number => {
  return rows.reduce((sum, row ) =>  sum+(row.quantity*row.price), 0)
}

export function cartReducer(state = initialState, action: CartActionTypes): CartState {
  switch (action.type) {
    case ADD_ROW: {
      const rows =  state.rows.filter((row) => row.itemNo !== action.payload.itemNo);
      const newRows = [...rows, action.payload]
      return { toPay: calcToPay(newRows), rows: newRows };
    }

    case UPDATE_ROW:{
      const {item, quantity} = action.payload;
      
      let rows: Row[] = []

      if( quantity <= 0){
        rows = state.rows.filter(row => row.itemNo !== item)
      }
      else{
        rows = state.rows.map((row) => {
        if (row.itemNo !== item) {
          return row;
        }

        return {
          ...row,
          quantity: action.payload.quantity
        };
      });
      }
      

      return {rows, toPay: calcToPay(rows)}
    }

    default:
      return state;
  }
}
