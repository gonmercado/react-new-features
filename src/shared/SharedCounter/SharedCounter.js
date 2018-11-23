import { useState } from 'react';

const useCounterIncremental = () => {
  const [ value, setValue ] = useState(0);

  const handleIncrementValue = () => setValue(value + 2);

  return [ value, handleIncrementValue ]
};

export default useCounterIncremental;