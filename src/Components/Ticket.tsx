import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import T from '../Components/Style/Ticket.module.css';
import { TButton } from './ArrayTemp';
import { Button } from './Button';
import { checkResult } from './Store/Slice';
import { AppDispatch, RootState } from './Store/Store';

export const Ticket: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const arrayCheckedDigits = useSelector<RootState>((store) => store.buttonSlice.checkedDigits);
  const countCheckedDigits = useSelector<RootState>(
    (store) => store.buttonSlice.countCheckedDigits
  );
  const countCheckedAuxDigits = useSelector<RootState>(
    (store) => store.buttonSlice.countcCeckedAuxDigits
  );
  const arrayCheckedAuxDigits = useSelector<RootState>(
    (store) => store.buttonSlice.checkedAuxDigits
  );
  return (
    <div className={T.ticket}>
      <header>
        <p className={T.ticket_name}> Билет 1</p>
      </header>
      {8 - (countCheckedDigits as number) ? (
        <p>Поле 1: Отметьте {`${8 - (countCheckedDigits as number)}`} чисел</p>
      ) : (
        <p>Поле 1: все цифры отмечены</p>
      )}
      <div className={T.first_part}>
        {(arrayCheckedDigits as TButton[]).map((item, index) => (
          <>
            <Button {...item} key={index} />
          </>
        ))}
      </div>
      {1 - (countCheckedAuxDigits as number) ? (
        <p>Поле 2: Отметьте {`${1 - (countCheckedAuxDigits as number)}`} число</p>
      ) : (
        <p>Поле 2: все цифры отмечены</p>
      )}
      <div className={T.second_part}>
        {(arrayCheckedAuxDigits as TButton[]).map((item, index) => (
          <>
            <Button {...item} key={index} />
          </>
        ))}
      </div>
      {countCheckedAuxDigits === 1 && countCheckedDigits === 8 ? (
        <input
          className={T.submit_button}
          type={'button'}
          onClick={() => {
            dispatch(checkResult('check'));
          }}
          value="Показать результат"
        />
      ) : null}
    </div>
  );
};
