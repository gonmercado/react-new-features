import { useContext, useEffect } from 'react';
import { TitleContext } from '../titleContext';

const useHeaderTitle = (customTitle) => {
  const titleContext = useContext(TitleContext);

  useEffect(() => {
    titleContext.changeTitle(customTitle);
  });
};

export default useHeaderTitle;