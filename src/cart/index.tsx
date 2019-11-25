import { h } from 'preact';

import { useRows, useToPay, AppState } from '../store';
export const MiniCart = () => {
  const rows = useRows()
  const toPay = useToPay()
  
  const items = rows.map(({ itemNo, item, quantity, price }, i) => (
    <li key={i}>
      {itemNo} - {item} => {(quantity * price).toFixed(2)} kr{' '}
    </li>
  ));

  console.log(rows)

  return (
    <div>
      <ul>{items}</ul>
      <p>Att betala: {toPay}</p>
    </div>
  );
};
