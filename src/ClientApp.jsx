// @flow

import React from 'react';
import { render } from 'react-dom';
import Perf from 'react-addons-perf';
import App from './app';

window.Perf = Perf;
Perf.start();

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./app', () => {
    renderApp();
  });
}
