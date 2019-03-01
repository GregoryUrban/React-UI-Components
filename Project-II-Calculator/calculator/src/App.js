import React from 'react';
// import ReactDOM from 'react-dom'
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';


const App = () => {
  return (
    <div>
     Some Stuff
     <CalculatorDisplay />
     <NumberButton />
     <ActionButton />
    </div>
  );
};

export default App;
