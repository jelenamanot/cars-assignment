import React from 'react';
import ReactDOM from 'react-dom';

// For redux
import {Provider} from "react-redux";
import store from './store'; 

import App from './components/App';

import './css/main.scss';

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>, 
   document.getElementById('root')
);