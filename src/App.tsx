import React from 'react';
import { Ticket } from './Components/Ticket';
import Main from '../src/App.module.css';

const App: React.FC = () => {
  return (
    <div className={Main.field}>
      <header></header>
      <Ticket />
      <footer></footer>
    </div>
  );
};

export default App;
