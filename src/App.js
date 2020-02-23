import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Header from './components/header/Header';
import Sort from './components/sort/Sort';
import Filter from './components/filter/Filter';
import ShoppingItems from './components/shopping-items/ShoppingItems';
import Cart from './components/pages/Cart';
import './App.scss';

const App = () => {
  //Init Materialize JS
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div>
            <Header />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <div className='row body-container'>
                    <div className='col s6 m6 l3'>
                      <Sort />
                    </div>

                    <div className='col s6 m6 l9'>
                      <Filter />
                    </div>
                    <ShoppingItems />
                  </div>
                )}
              ></Route>
              <Route exact path='/cart' component={Cart}></Route>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
