import { ordered, restocked } from './icecreamSlice';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

const IceCreamView = () => {
  const numOfIceCreams = useAppSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useAppDispatch();

  const [stockValue, setStockValue] = useState<number>(1);

  console.log({ numOfIceCreams });
  return (
    <div>
      <p>No of ice-creams: {numOfIceCreams} </p>
      <button onClick={() => dispatch(ordered())}>Order ice-cream</button>
      <input
        type="number"
        value={stockValue}
        onChange={(e) => setStockValue(parseInt(e.target.value, 10))}
      />

      <button onClick={() => dispatch(restocked(stockValue))}>
        Restock ice-creams
      </button>
    </div>
  );
};

export default IceCreamView;
