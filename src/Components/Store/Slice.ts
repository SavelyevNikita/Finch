import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArrayOfAuxButton, ArrayOfButton, TButton } from '../ArrayTemp';

type TInitialState = {
  checkedDigits: TButton[];
  countCheckedDigits: number;
  checkedAuxDigits: TButton[];
  countcCeckedAuxDigits: number;
};

const initialState: TInitialState = {
  checkedDigits: ArrayOfButton,
  checkedAuxDigits: ArrayOfAuxButton,
  countCheckedDigits: 0,
  countcCeckedAuxDigits: 0,
};

const buttonSlice = createSlice({
  name: 'ButtonHandler',
  initialState,
  reducers: {
    setDigit(
      state,
      action: PayloadAction<{ digit: number; id: string; checked: boolean; type: string }>
    ) {
      let countCheckedDigits = 0;
      let countcCeckedAuxDigits = 0;
      if (action.payload.type === 'long') {
        const toogleDigit = state.checkedDigits.find((item) => item.digit === action.payload.digit);
        if (toogleDigit) {
          toogleDigit.checked = !toogleDigit.checked;
        }
      } else if (action.payload.type === 'short') {
        const toogleDigit = state.checkedAuxDigits.find(
          (item) => item.digit === action.payload.digit
        );
        if (toogleDigit) {
          toogleDigit.checked = !toogleDigit.checked;
        }
      }
      state.checkedDigits.forEach((item) => {
        if (item.checked) {
          countCheckedDigits = countCheckedDigits + 1;
        }
      });
      state.countCheckedDigits = countCheckedDigits;
      state.checkedAuxDigits.forEach((item) => {
        if (item.checked) {
          countcCeckedAuxDigits = countcCeckedAuxDigits + 1;
        }
      });
      state.countcCeckedAuxDigits = countcCeckedAuxDigits;
    },
    checkResult(state, action) {
      const bigFieldRandomArray = new Set();
      while (bigFieldRandomArray.size < 4) {
        bigFieldRandomArray.add(Math.floor(Math.random() * 19) + 1);
      }
      const smallFieldRandomArray: number = Math.floor(Math.random() * 2) + 1;
      console.log(bigFieldRandomArray);
      console.log(smallFieldRandomArray);
      const smallFieldResult = state.checkedAuxDigits.find((item) => {
        return item.digit === smallFieldRandomArray;
      });
      console.log(smallFieldResult ? true : false);
    },
  },
});

export default buttonSlice.reducer;
export const { setDigit, checkResult } = buttonSlice.actions;
