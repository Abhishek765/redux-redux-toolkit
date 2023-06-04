import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

type InitialStateType = {
  numOfIceCreams: number;
};

const initialState: InitialStateType = {
  numOfIceCreams: 20
};

const iceCreamSlice = createSlice({
  name: 'ice-cream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload;
    }
  },
  // Creating a scenario to decrement the number of ice-cream when a  cake is ordered
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams--;
    });
  }
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
