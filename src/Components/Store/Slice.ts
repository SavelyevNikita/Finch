import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArrayOfAuxButton, ArrayOfButton, TButton } from '../ArrayTemp';

type TInitialState = {
  checkedDigits: TButton[];
  countCheckedDigits: number;
  checkedAuxDigits: TButton[];
  countcCeckedAuxDigits: number;
  bigFieldRandomArray: number[];
  smallFieldRandomArray: number;
  resultBigFieldArray: number[];
  resultSmallFieldArray: number[];
  overlay: string;
};

const initialState: TInitialState = {
  checkedDigits: ArrayOfButton,
  checkedAuxDigits: ArrayOfAuxButton,
  countCheckedDigits: 0,
  countcCeckedAuxDigits: 0,
  smallFieldRandomArray: 0,
  bigFieldRandomArray: [],
  resultBigFieldArray: [],
  resultSmallFieldArray: [],
  overlay: 'game',
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
    makeRandomArray(state, action) {
      const bigFieldRandomArray = new Set();
      while (bigFieldRandomArray.size < 4) {
        bigFieldRandomArray.add(Math.floor(Math.random() * 19) + 1);
      }
      const smallFieldRandomArray: number = Math.floor(Math.random() * 2) + 1;
      state.bigFieldRandomArray = Array.from(bigFieldRandomArray) as number[];
      state.smallFieldRandomArray = smallFieldRandomArray;
    },
    resetResult(state, action) {
      state.resultBigFieldArray = [];
      state.resultSmallFieldArray = [];
      state.bigFieldRandomArray = [];
      state.smallFieldRandomArray = 0;
      state.countCheckedDigits = 0;
      state.countcCeckedAuxDigits = 0;
      state.checkedDigits = ArrayOfButton;
      state.checkedAuxDigits = ArrayOfAuxButton;
      state.overlay = 'game';
    },
    checkResult(state, action) {
      state.checkedDigits.forEach((item) => {
        if (item.checked && state.bigFieldRandomArray.includes(item.digit)) {
          state.resultBigFieldArray.push(item.digit);
        }
      });
      state.checkedAuxDigits.forEach((item) => {
        if (item.checked && state.smallFieldRandomArray === item.digit) {
          state.resultSmallFieldArray.push(item.digit);
        }
      });
      state.overlay = 'result';
    },
  },
});

export default buttonSlice.reducer;
export const { setDigit, makeRandomArray, checkResult, resetResult } = buttonSlice.actions;
