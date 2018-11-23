import React, { useContext } from 'react';
import { UserContext } from '../../../../../../userContext';

const Nieto2 = () => {
  const userContext = useContext(UserContext);

  return (
    <div>
      <p>Nieto 2</p>
      <input value={ userContext.userName } onChange={ (ev) => userContext.changeUser(ev.target.value) } />
    </div>
  )
}

export default Nieto2;