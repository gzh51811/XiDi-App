import  React from 'react';

import Nheader from  '../../components/Nation/Nheader';
import Nsection from '../../components/Nation/Nsection';



class Nation extends React.Component{
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