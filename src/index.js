import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';
import Stack from './components/Stack';
import StackForm from './components/StackForm';
import Header from './components/Header';

import rootReducer from './reducers';
import { setStack } from './actions';
import './index.scss';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(setStack({ id: 0, title: 'Example', cards: [] }))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <hr />
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/stack' component={Stack} />
        <Route path='/stack-form' component={StackForm} />
      </Switch>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root'));