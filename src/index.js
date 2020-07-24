import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import '././style/css/Index.css';
import thunk from 'redux-thunk';

import {todoReducer} from './reducers/todoReducer';

const store = createStore(todoReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
