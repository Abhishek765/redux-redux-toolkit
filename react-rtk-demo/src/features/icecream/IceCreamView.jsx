import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';
import { useState } from 'react';

const IceCreamView = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  const [stockValue, setStockValue] = useState(1);

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
