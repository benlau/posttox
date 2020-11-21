import React from 'react';
import Base from '~/components/Base';
import { MainContextProvider } from '~/context/MainContext';

function App() {
  return (
    <MainContextProvider>
      <Base></Base>
    </MainContextProvider>
  );
}

export default App;
