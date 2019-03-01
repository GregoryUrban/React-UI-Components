import React from 'react';
// import React from 'react-dom'
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
    <div>
     <ActionButton />
     <NumberButton />
     <CalculatorDisplay />
    </div>
  );
};

export default App;
