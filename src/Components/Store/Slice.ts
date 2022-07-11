import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArrayOfButton, TButton } from '../ArrayTemp';

type TInitialState = {
  checkedDigits: TButton[];
  checkedAuxDigits: TButton[];
};

const initialState: TInitialState = {
  checkedDigits: ArrayOfButton,
  checkedAuxDigits: [],
};

const buttonSlice = createSlice({
  name: 'ButtonHandler',
  initialState,
  reducers: {
    setDigit(state, action: PayloadAction<{ digit: number; id: string; checked: boolean }>) {
      const toogleDigit = state.checkedDigits.find((item) => item.digit === action.payload.digit);
      if (toogleDigit) {
        toogleDigit.checked = !toogleDigit.checked;
      }
    },
  },
});

export default buttonSlice.reducer;
export const { setDigit } = buttonSlice.actions;
