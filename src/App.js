import React from 'react';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Category from './pages/Category';

import Nation from './pages/Nation';

import Xfooter from './components/Xfooter';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
// 引入connect高阶组件
import { connect } from 'react-redux'


class App extends React.Component {

      componentWillMount() {
            this.props.dispatch({ type: 'INIT_CART_ASYNC',payload : {"uid" : 1}});
      }

      render() {
            return <div>
                  <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/category' component={Category} />
                        <Route path='/cart' component={Cart} />
                        <Route path='/nation' component={Nation} />
                  </Switch>
                  <Xfooter len={this.props.cartlen}/>
            </div>
      }

}

App = withRouter(App);

const mapStateToProps = (state) => {

      let len = state.cart.goodslist ? state.cart.goodslist.length : 0;
      return {
            cartlen: len
      }
}

App = connect(mapStateToProps)(App);

export default App;