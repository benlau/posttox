import React from 'react';
import App from '~/App';

export default {
  title: 'App',
};

export const story1 = (() => {

  const component = () => (
    <App />
  );

  component.story = {
    name: 'normal',
  };

  return component;
})();
