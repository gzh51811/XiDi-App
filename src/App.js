import React  from 'react';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Category from './pages/Category';

import Nation from './pages/Nation';
import Mine from './pages/Mine';
import Login from './pages/Login'

import Xfooter from './components/Xfooter';

import { Route,Switch,Redirect,withRouter} from 'react-router-dom';





class App extends React.Component{


      render(){
            
        return<div>
                <Switch>
                       <Route path='/' exact component={Home}/> 
                       <Route path='/category' component={Category}/> 
                       <Route path='/cart' component={Cart}/> 
                       <Route path='/nation' component={Nation}/> 
                       <Route path='/mine' component={ Mine}/>
                 </Switch>  
                 <Xfooter/>
            </div> 
      }  

}

export default App