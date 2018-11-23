import React, { useState } from 'react';

const FunctionWithState = () => {
  const [ value, setValue ] = useState(0);

  const handleButtonClick = () => setValue(value + 1 );

  return (
    <div className={ 'card' }>
      <h2>Funcion con state por hook</h2>
      <p>{ value }</p>
      <button onClick={ handleButtonClick }>Incrementar</button>
    </div>
  )
};

export default FunctionWithState;