import  React from 'react';

import  Mheader from "../../components/Mine/Mheader";
import  Msection from "../../components/Mine/Msection";

import './mine.css';

class Mine extends React.Component{
      render(){
          return(
              <div className="othiscont" style={{minHeight: "667px"}}>
                    <Mheader/>
                    <Msection/>
                    <p  className="copyright"> © 2019 喜地电子商务有限公司 版权所有</p>
                </div>    

          )
      }  

}

export default  Mine