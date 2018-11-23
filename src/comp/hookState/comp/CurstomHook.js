import React from 'react';
import useCounter from '../../../shared/SharedCounter/SharedCounter';

const FunctionWithCustomHook = () => {
  const [ counter, incrementCounter ] = useCounter();

  const handleButtonClick = () => incrementCounter();

  return (
    <div className={ 'card' }>
      <h2>Funcion con un custom hook</h2>
      <p>{ counter }</p>
      <button onClick={ handleButtonClick }>Incrementar</button>
    </div>
  )
};

export default FunctionWithCustomHook;