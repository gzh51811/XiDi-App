import  React from 'react';

import Nheader from  '../../components/Nation/Nheader';
import Nsection from '../../components/Nation/Nsection';

import  './Nation.css';


class Nation extends React.Component{
    componentWillUnmount(){
        let {location} =this.props;
        let path = location.pathname
        localStorage.setItem("luyou",path)
    }

      render(){
          return(
              <div className="main">
                    <Nheader/>
                    <Nsection/>
                   
                </div>    

          )
      }  

}

export default  Nation