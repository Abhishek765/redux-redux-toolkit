const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "ice-cream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
