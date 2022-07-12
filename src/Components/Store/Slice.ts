import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArrayOfAuxButton, ArrayOfButton, TButton } from '../ArrayTemp';

type TInitialState = {
  checkedDigits: TButton[];
  checkedAuxDigits: TButton[];
};

const initialState: TInitialState = {
  checkedDigits: ArrayOfButton,
  checkedAuxDigits: ArrayOfAuxButton,
};

const buttonSlice = createSlice({
  name: 'ButtonHandler',
  initialState,
  reducers: {
    setDigit(
      state,
      action: PayloadAction<{ digit: number; id: string; checked: boolean; type: string }>
    ) {
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
    },
  },
});

export default buttonSlice.reducer;
export const { setDigit } = buttonSlice.actions;
