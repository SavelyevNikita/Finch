import React from 'react';
import { useSelector } from 'react-redux';
import T from '../Components/Style/Ticket.module.css';
import { ArrayOfButton, TButton } from './ArrayTemp';
import { Button } from './Button';
import { RootState } from './Store/Store';

export const Ticket: React.FC = () => {
  const arrayCheckedDigits = useSelector<RootState>((store) => store.buttonSlice.checkedDigits);
  return (
    <div className={T.ticket}>
      <header></header>
      <div className={T.first_part}>
        {(arrayCheckedDigits as TButton[]).map((item, index) => (
          <>
            <Button {...item} key={index} />
          </>
        ))}
      </div>
      <div className={T.second_part}></div>
    </div>
  );
};
