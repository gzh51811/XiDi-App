import React from 'react';

import ReactDOM from 'react-dom';

import App from './App'
import Detail from './pages/Detail';
import List from './pages/List';
import Register from './pages/Register';
import Mine from './pages/Mine';
import { HashRouter } from 'react-router-dom';

import { Route,Switch,Redirect,withRouter} from 'react-router-dom';


//引入样式
import '../style/index.css';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/detail" component={Detail}/>
            <Route path="/list" component={List} />
            <Route path="/register" component={Register} />
            <Route path='/mine' component={Mine}/> 
            <Route path="/"  component={App} />
        </Switch>
    </HashRouter>
    , document.querySelector("#app")

)