import React  from 'react';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Mine from './pages/Mine';
import Nation from './pages/Nation';

import Xfooter from './components/Xfooter';

import { Route,Switch,Redirect,withRouter} from 'react-router-dom';



class App extends React.Component{
      render(){
        return<div>
                <Switch>
                       <Route path='/app/home' component={Home}/> 
                       <Route path='/app/category' component={Category}/> 
                       <Route path='/app/cart' component={Cart}/> 
                       <Route path='/app/mine' component={Mine}/> 
                       <Route path='/app/nation' component={Nation}/> 
                       <Redirect from="/"  to="/home"/>
                 </Switch>  
                 <Xfooter/>
            </div> 
      }  

}

export default App