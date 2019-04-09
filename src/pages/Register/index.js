import React from 'react'

import Rheader from '../../components/Register/Rheader'
import Rsection from  '../../components/Register/Rsection'


import './register.css';

class Register extends React.Component{

     gotoback(){
        this.props.history.goBack();
     }


     render(){
        return<div className="othiscont" style={{height:"667px"}}>
                    <Rheader gotoback={this.gotoback.bind(this)}/>
                    <Rsection/>
                </div>

     }   


}

export default Register