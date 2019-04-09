import React from 'react';





function Rheader({gotoback}){

   return(
    <header  className="login_head">
    <div  className="header_left">
         <i  className="icon icon_triangle_left" onClick={gotoback.bind(this)}></i>
    </div>
    <div  className="login_title">喜地-手机注册</div>
    </header>
   ) 


}

export default Rheader