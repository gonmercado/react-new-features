import React  from 'react';
import { Switch, Route } from 'react-router-dom';

import Page2 from '../page2/Page2';
import Page3 from '../page3/Page3';
import HookStatePage from '../hookState/HookStatePage';
import { WaitingComponent } from '../../helpers/WaitingComponent';
import Context1 from '../context1/Context1';
import Context2 from '../context2/Context2';
import Context3 from '../context3/Context3';
const Page1Lazy = React.lazy(() => import('../page1/Page1'));

const AppBody = () => (
  <div className={ 'app-body' }>
    <Switch>
      <Route path={ '/hook-state' } component={ HookStatePage } />
      <Route path={ '/page-1' } component={ WaitingComponent(Page1Lazy) } />
      <Route path={ '/page-2' } component={ Page2 } />
      <Route path={ '/page-3' } component={ Page3 } />
      <Route path={ '/context-1' } component={ Context1 } />
      <Route path={ '/context-2' } component={ Context2 } />
      <Route path={ '/context-3' } component={ Context3 } />
    </Switch>
  </div>
);

export default AppBody;