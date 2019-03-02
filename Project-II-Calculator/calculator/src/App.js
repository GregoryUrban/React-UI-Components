import React from 'react';
// import ReactDOM from 'react-dom'
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';


const App = () => {
  return (
    <div className='container'>
      <CalculatorDisplay />
      <ActionButton buttonStyle='clear' text='clear'/>
      <NumberButton buttonStyle='reds' text='÷'/>
      <NumberButton buttonStyle='whites' text='7'/>
      <NumberButton buttonStyle='whites' text='8'/>
      <NumberButton buttonStyle='whites' text='9'/>
      <NumberButton buttonStyle='reds' text='X'/>
      <NumberButton buttonStyle='whites' text='4'/>
      <NumberButton buttonStyle='whites' text='5'/>
      <NumberButton buttonStyle='whites' text='6'/>
      <NumberButton buttonStyle='reds' text='—'/>
      <NumberButton buttonStyle='whites' text='1'/>
      <NumberButton buttonStyle='whites' text='2'/>
      <NumberButton buttonStyle='whites' text='3'/>
      <NumberButton buttonStyle='reds' text='+'/>
      <ActionButton buttonStyle='zero' text='0'/>
      <NumberButton buttonStyle='reds' text='='/>

    </div>
  );
};

export default App;
