import React from 'react';
import { Ticket } from './Components/Ticket';
import Main from '../src/App.module.css';
import { useSelector } from 'react-redux';
import { RootState } from './Components/Store/Store';
import { Result } from './Components/Result';

const App: React.FC = () => {
  const overlay = useSelector<RootState>((state) => state.buttonSlice.overlay);
  return <div className={Main.field}>{overlay === 'game' ? <Ticket /> : <Result />}</div>;
};

export default App;
