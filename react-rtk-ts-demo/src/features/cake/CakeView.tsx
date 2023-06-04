import { ordered, restocked } from './cakeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const CakeView = () => {
  const numberOfCakes = useAppSelector((state) => state.cake.numberOfCakes);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>No of cakes: {numberOfCakes}</p>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(restocked(3))}>Restock cakes</button>
    </div>
  );
};

export default CakeView;
