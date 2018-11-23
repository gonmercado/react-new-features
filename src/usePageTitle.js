import { useContext, useEffect } from 'react';
import { TitleContext } from './titleContext';

const usePageTitle = (pageTitle) => {
  const titleContext = useContext(TitleContext);

  useEffect(() => {
    titleContext.changeTitle(pageTitle);
  });

};

export default usePageTitle;