import React, { Component } from 'react';
import Main from './components/Main/Main';
import './App.css';

import { Provider } from 'react-redux';
import reducer from './reducers/indexReducers';
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { autoRehydrate } from 'redux-persist';


import promise from "redux-promise";
import ReduxThunk from 'redux-thunk';



const composePlugin = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistConfig = {
  key: 'root',
  storage,
}




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
