import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import store from './store'


// 引入react-redux
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import App from './App'
import Detail from './pages/Detail';
import List from './pages/List';
import Register from './pages/Register';
import Login from './pages/Login';

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

//引入样式
import '../style/index.css';
import '../style/public.css';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/detail" component={Detail}/>
            <Route path="/list" component={List} />
            <Route path="/register" component={Register} />
            <Route path='/login' component={Login}/> 
            <Route path="/"  component={App}/>
        </Switch>
    </HashRouter>
    , document.querySelector("#app")

)