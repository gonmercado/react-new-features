import React, { Suspense } from 'react';
import ClassState from './comp/ClassState';
import FunctionWithState from './comp/HookState';
import FunctionWithCustomHook from './comp/CurstomHook';
const ReducerHookLazy = React.lazy(() => import('./comp/ReducerHook'));

const HookStatePage = () => (
  <div className={ 'app-page' }>
    <ClassState />
    <FunctionWithState />
    <FunctionWithState />
    <FunctionWithCustomHook />
    <FunctionWithCustomHook />
    <Suspense fallback={ <div>...loading</div> }>
      <ReducerHookLazy />
    </Suspense>
    <Suspense fallback={ <div>...loading</div> }>
      <ReducerHookLazy />
    </Suspense>
  </div>
);

export default HookStatePage;
