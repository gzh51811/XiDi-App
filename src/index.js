import React from 'react';

import ReactDOM from 'react-dom';

import App from './App'
import Detail from './pages/Detail';
import List from './pages/List';
import Register from './pages/Register';

import {HashRouter} from 'react-router-dom';

import {Route, Switch, Redirect, withRouter} from 'react-router-dom';

import {Provider} from 'react-redux'
import store from './store'


//引入样式
import '../style/index.css';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/detail" component={Detail}/>
                <Route path="/list" component={List}/>
                <Route path="/register" component={Register}/>
                <Route path="/" component={App}/>
            </Switch>
        </HashRouter>
    </Provider>
    ,
    document.querySelector("#app")
)