import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  numberOfCakes: number;
};

const initialState: InitialStateType = {
  numberOfCakes: 10
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCakes--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numberOfCakes += action.payload;
    }
  }
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
