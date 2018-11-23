import React from 'react';
import Nieto1 from './comp/nieto1/Nieto1';
import Nieto2 from './comp/nieto2/Nieto2';

const Hijo1 = () => (
  <div>
    Hijo 1
    <Nieto1 />
    <Nieto2/>
  </div>
);

export default Hijo1;