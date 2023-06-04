import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from './cakeSlice';

const CakeView = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);

  const dispatch = useDispatch();

  return (
    <div>
      <p>No of cakes: {numberOfCakes}</p>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(restocked(3))}>Restock cakes</button>
    </div>
  );
};

export default CakeView;
