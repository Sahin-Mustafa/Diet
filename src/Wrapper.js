import React from 'react';
import Router from './Router';
import Provider from './contex/ProviderData';

function Wrapper() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}
export default Wrapper;
