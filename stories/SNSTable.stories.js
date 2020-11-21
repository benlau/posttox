import React from 'react';
import SNSTable from '~/components/SNSTable';
import { MainContextProvider } from '~/context/MainContext';

export default {
  title: 'components/SNSTable',
};

export const story1 = (() => {
  const component = () => (
    <MainContextProvider>
      <div style={{width: '100vw'}}>
        <SNSTable style={{width: '100%'}}/>
      </div>
    </MainContextProvider>
  );

  component.story = {
    name: 'normal',
  };

  return component;
})();
