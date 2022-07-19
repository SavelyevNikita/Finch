import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetResult } from './Store/Slice';
import { AppDispatch, RootState } from './Store/Store';
import T from '../Components/Style/Ticket.module.css';

export const Result: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const resultBigFieldArray = useSelector<RootState>(
    (store) => store.buttonSlice.resultBigFieldArray
  );
  const resultSmallFieldArray = useSelector<RootState>(
    (store) => store.buttonSlice.resultSmallFieldArray
  );

  return (
    <div className={T.ticket}>
      {(resultBigFieldArray as []).length >= 4 && (resultSmallFieldArray as []).length >= 1 ? (
        <p>{'Вы победили!'}</p>
      ) : (
        <p>{'Вы проиграли'}</p>
      )}
      {(resultBigFieldArray as []).length ? (
        <p>{`Совпали цифры в Поле 1: ${resultBigFieldArray}`}</p>
      ) : (
        <p>{'В Поле 1 нет совпадений'}</p>
      )}
      {(resultSmallFieldArray as []).length ? (
        <p>{`Совпали цифры в Поле 2: ${resultSmallFieldArray}`}</p>
      ) : (
        <p>{'В Поле 2 нет совпадений'}</p>
      )}
      <input
        className={T.submit_button}
        value={'Новая Игра'}
        type="button"
        onClick={() => {
          dispatch(resetResult('game'));
        }}
      />
    </div>
  );
};
