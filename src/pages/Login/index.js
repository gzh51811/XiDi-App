import  React from 'react';

import  Mheader from "../../components/Login/Mheader";
import  Msection from "../../components/Login/Msection";

import CPM from '../../components/Login/CPM';

import './mine.css';

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            cpm:false
        }
    }

    gotoback(){
        let {history} =this.props
        let luyou = localStorage.getItem('luyou');
        history.push(luyou);
    
    }
    changecpm(bool){
        this.setState({
            cpm:bool
        })
    }

      render(){
        //   console.log(this.props.history)
        let {cpm} =this.state
          return(
              <div className="othiscont" style={{minHeight: "667px"}}>
                    <Mheader gotoback={this.gotoback.bind(this)}/>
                    <Msection changecpm={this.changecpm.bind(this)}/>
                   
                    {
                        cpm ? <CPM changecpm={this.changecpm.bind(this)}/>:null
                    }
                    <p  className="copyright"> © 2019 喜地电子商务有限公司 版权所有</p>
                </div>    

          )
      }  

}

export default  Login