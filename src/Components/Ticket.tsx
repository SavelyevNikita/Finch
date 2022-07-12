import React, { FormEvent, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import T from '../Components/Style/Ticket.module.css';
import { TButton } from './ArrayTemp';
import { Button } from './Button';
import { RootState } from './Store/Store';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {}

export const Ticket: React.FC = () => {
  const arrayCheckedDigits = useSelector<RootState>((store) => store.buttonSlice.checkedDigits);
  const arrayCheckedAuxDigits = useSelector<RootState>(
    (store) => store.buttonSlice.checkedAuxDigits
  );
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // e.preventDefault();
    console.log('onSubmit');
    console.log(data);
  };
  return (
    <div className={T.ticket}>
      <header>
        <p className={T.ticket_name}> Билет 1</p>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Поле 1: Отметьте 8 чисел</p>
        <div className={T.first_part}>
          {(arrayCheckedDigits as TButton[]).map((item, index) => (
            <>
              <Button {...item} key={index} />
            </>
          ))}
        </div>
        <p>Поле 1: Отметьте 1 число</p>
        <div className={T.second_part}>
          {(arrayCheckedAuxDigits as TButton[]).map((item, index) => (
            <>
              <Button {...item} key={index} />
            </>
          ))}
        </div>
        <input type="submit" className={T.submit_button}>
          Показать результат
        </input>
      </form>
    </div>
  );
};
