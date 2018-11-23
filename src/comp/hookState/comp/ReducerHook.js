import React, { useReducer } from 'react';
import counterReducer from '../../../shared/reducer/counterReducer';

const ReducerHook = () => {
  const [ counter, dispatch ] = useReducer(counterReducer, { counter: 1 });

  const handleButtonClick = () => dispatch({ type: 'increment' });

  return (
    <div className={ 'card' }>
      <h2>Funcion con reducer hook</h2>
      <p>{ counter.counter }</p>
      <button onClick={ handleButtonClick }>Incrementar</button>
    </div>
  )
};

export default ReducerHook;

