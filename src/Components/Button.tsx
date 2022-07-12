import React from 'react';
import BT from '../Components/Style/Button.module.css';
import { useDispatch } from 'react-redux';
import { setDigit } from './Store/Slice';
import { AppDispatch, RootState } from './Store/Store';
import { TButton } from './ArrayTemp';

export const Button: React.FC<TButton> = ({ digit, id, checked, type }) => {
  const dispatch = useDispatch<AppDispatch>();
  const onChoosen = (digit: number, id: string, checked: boolean, type: string) => {
    dispatch(setDigit({ digit, id, checked, type }));
  };
  return (
    <>
      <label className={checked ? BT.lbl_checked : BT.lbl_unChecked}>
        <input
          value={`${digit}`}
          type="button"
          onClick={() => onChoosen(digit, id, checked, type)}
        />
      </label>
    </>
  );
};
