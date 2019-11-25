
import {h} from "preact";

import { useDispatch, thunkAddRow } from "../store";

interface BuyButtonProps {
  itemNo: string
  name: string
}
export const BuyButton = (props: BuyButtonProps) => {

  const {itemNo, name} = props;
  const dispatch = useDispatch()

  const addItemToCart = () => {
    console.log("hhh")
    const action = thunkAddRow({
      item: name,
      itemNo,
      price: 10,
      quantity: 1
    })

    console.log("action", action)

    dispatch(action)
  } 

  return (
    <button onClick={addItemToCart}>Köp</button>
  )
}
