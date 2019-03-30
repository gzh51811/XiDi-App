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
                       <Route path='/' exact component={Home}/> 
                       <Route path='/category' component={Category}/> 
                       <Route path='/cart' component={Cart}/> 
                       <Route path='/mine' component={Mine}/> 
                       <Route path='/nation' component={Nation}/> 
                 </Switch>  
                 <Xfooter/>
            </div> 
      }  

}

export default App