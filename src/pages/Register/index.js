import React from 'react'

import Rheader from '../../components/Register/Rheader'
import Rsection from  '../../components/Register/Rsection'


import './register.css';

class Register extends React.Component{
     render(){
        return<div className="othiscont" style={{height:"667px"}}>
                    <Rheader/>
                    <Rsection/>
                </div>

     }   


}

export default Register