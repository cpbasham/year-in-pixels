import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import ReduxStore from './stores';
import YearInPixels from './components/YearInPixels';

// import {} from './action_creators';

require('./styles/index.scss');

ReactDOM.render(
  <Provider store={ReduxStore}>
    <YearInPixels />
  </Provider>,
  document.getElementById('app')
);
