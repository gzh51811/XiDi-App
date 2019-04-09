import React from 'react';

import {withRouter} from 'react-router-dom';

import { message} from 'antd';

import axios from 'axios';

class Msection extends React.Component {
    constructor(){
        super();
        this.state={
            username:"",
            usertrue:true,
            password:"",
            passtrue:true,
            show:false,
            regular:false
        }
        
        message.config({
            top: 110,
          });
    }
    componentWillUnmount(){
        clearTimeout(this.timer);
        clearTimeout(this.timer2)
    }



    //获取账号input框的值
    changeName(e){
        this.setState({
           username:e.target.value
       }) 
    }


    //清空账号input框     
    clearname(){
        this.refs.uname.value = "";
        this.setState({
            username:""
        })
    }
    //失去焦点改变状态
    ChangeNone(){
        let{username} = this.state

     this.timer2 =  setTimeout(() =>{
        this.setState({
            usertrue:false
            })        
        },0);
        var useryz = /^1[3-9]\d{9}$/;    
        if(useryz.test(username)){
                this.setState({
                    regular:true
                })   
        }else{
            message.error('请输入正确的手机号',0.5);
        }

       
    }
    //点击文本框
    ChangeBlock(){
        this.setState({
            usertrue:true
        })
    }

    //获取密码框的值
    changeMima(e){
        this.setState({
            password:e.target.value
        })
    }
    //清空密码框
    clearpass(){
        this.refs.Mima.value=""
        this.setState({
            password:""
        })
    }

    //失去焦点
    changefalse(){
     this.timer =  setTimeout(()=>{
            this.setState({
                passtrue:false
            })
        },0)
    }

    //点击密码框
    changetrue(){
      this.setState({
            passtrue:true
        })
    }
    //显示隐藏密码
    Mihide(){
        this.setState({
            show:!this.state.show
        })
    }

    //点击登录
    login(){
        let{username,password,regular}  = this.state
  
        let login = username.length == 11 && password.length >= 6 

        
        if(login&&regular){
              axios.get("/login",{
                  params:{
                      username,
                      password
                  }
              }).then(res=>{
                    if(res.data == "yes"){
                        localStorage.setItem('username',this.state.username);   
                        this.props.history.goBack()
                         
                    }else{
                        this.props.changecpm(true)
                    }
              })  
        }


    }

    //去注册页
    gotoreg(){
        this.props.history.push('./register');
    }



    render() {
            let{username,password,usertrue,passtrue,show}  = this.state
            let login = username.length == 11 && password.length >= 6 
         return (
            <section className="login_cont">
                <div className="login_logo">
                    <a href="/"> 
                    <i className="icon icon_dalogo"></i>
                    </a>
                </div>
                <div className="login_box"> 
                <i className="icon icon_user"></i>
                    <input  maxLength="11" type="text" placeholder="手机号" onChange={this.changeName.bind(this)} ref="uname" 
                                                                           onBlur={this.ChangeNone.bind(this)}
                                                                           onClick={this.ChangeBlock.bind(this)}/> 
                    <i className="icon icon_unfinished" 
                        style={username.length&&usertrue ? {display:"block"}:{display: "none"}}
                        onClick={this.clearname.bind(this)}></i>
                </div>
                <div className="login_box password"> 
                    <i className="icon icon_lock"></i>
                    <input maxLength="16" minLength="6" placeholder="登录密码" type={show == true ? "text" : "password"} 
                                                                                              onChange={this.changeMima.bind(this)} ref="Mima"
                                                                                              onBlur={this.changefalse.bind(this)}
                                                                                              onClick={this.changetrue.bind(this)}/>
                   
                    <i className="icon icon_unfinished" 
                        style={password && passtrue ? { display: 'block'} :{display :"none" }}
                        onClick={this.clearpass.bind(this)}
                        ></i>
                    <i className={["icon icon_password_hide", show == true ? "icon_password_show" : null].join(" ")} onClick={this.Mihide.bind(this)}></i>
               
                </div>
                {/* <div data-type="phonelogin" className={["btn btn_login", istrue && isok   == true ? 'btn_login_on' : null].join(" ")} 
                    onClick={this.register.bind(this)}>立即注册</div> */}
                <div data-type="commonlogin" className={["btn btn_login",login == true? 'btn_login_on':null].join(" ")} onClick={this.login.bind(this)}>登录</div>
                <div className="login_text">
                    <div className="dynamiccodelogin">手机动态码登录</div> 
                    <a href="javascript:;" className="">忘记密码</a>
                </div>
                <div className="btn btn_regis" style={{ display:'block', clear:'both'}} onClick={this.gotoreg.bind(this)}>快速注册</div>
                <div className="login_third">
                    <a href="javascript::void(0);">
                     <i className="icon icon_weibo"></i>

                    </a>
                    <a href="javascript::void(0);">
                     <i className="icon icon_qq"></i>

                    </a>
                </div>
            </section>
        )
    }
}

Msection = withRouter(Msection);

export default Msection