import React from 'react';
import BT from '../Components/Style/Button.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setDigit } from './Store/Slice';
import { AppDispatch, RootState } from './Store/Store';
type TButton = {
  digit: number;
  id: string;
  checked: boolean;
};

export const Button: React.FC<TButton> = ({ digit, id, checked }) => {
  const dispatch = useDispatch<AppDispatch>();
  const array = useSelector<RootState>((store) => store.buttonSlice.checkedDigits);
  const onChoosen = (digit: number, id: string, checked: boolean) => {
    dispatch(setDigit({ digit, id, checked }));
  };
  return (
    <>
      <label className={checked ? BT.lbl_checked : BT.lbl_unChecked}>
        <input value={`${digit}`} type="button" onClick={() => onChoosen(digit, id, checked)} />
      </label>
    </>
  );
};
