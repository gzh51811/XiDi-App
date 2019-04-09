import React from 'react';

import axios from 'axios';

import { message} from 'antd';
import qs from "qs";
import {withRouter} from 'react-router-dom'

class Rsection extends React.Component {
    constructor() {
        super();
        this.state = {
            telinput: "",
            show: false,
            count: 10,
            liked: true,
            Verify: "获取验证码",
            isok: true,
            smsiput: "",
            miiput: "",
            rannum: "",
            teltrue:true,
            smstrue:true


        }
        message.config({
            top: 35,
          });


    }
  
    //获取账号input的值
    handelChange(e) {

        this.setState({
            telinput: e.target.value,
            // teltrue:!this.state.teltrue
        });
        if(this.state.telinput.length>0){
            this.setState({
                teltrue:true
            })
        }

    }
    //点击清空账号
    cleartext() {
        this.refs.ipt.value = '';
        this.setState({
            telinput: ""
        });
    }   
    changetelture(){
         if(this.state.telinput.length>0){
           this.setState({
                 teltrue:true,
             })
         }   

    }
      //账号失去焦点时
      telfocus(){
        setTimeout(()=>{
            this.setState({
                teltrue:false
            });
        
        },0)
    }
 
   


    //获去信息 input的值
    smsiput(e) {
        this.setState({
            smsiput: e.target.value
        });
    }
    //点击清空sms
    clearsms() {

        this.refs.sms.value = '';
        this.setState({
            smsiput:''
        });
    }

    //失去焦点时改变状态
    smsfocus(){
        setTimeout(()=>{
            this.setState({
                smstrue:false
            });
        
        },0)
    }
    //点击input时，改变状态
    changesmsture(){
        if(this.state.smsiput.length>0){
          this.setState({
                smstrue:true,
            })
        }   

   }


    //获取密码input的值
    miiput(e) {
        this.setState({
            miiput: e.target.value
        });

    }
    //点击清空
    clearmima() {

        this.refs.mima.value = '';
        this.setState({
            miiput: ''
        });
    }
  

   



    //发送验证码
    getVerify(len) {
     
        let {telinput} = this.state

        var useryz = /^1[3-9]\d{9}$/;    
        if (useryz.test(telinput)&& len.length === 11) {
            let suij = parseInt(Math.random() * (9999 - 1000 + 1) + 1000)
            this.setState({
                rannum: suij
            })
            let ran = "#code#=" + suij

            axios.get("http://10.3.137.199:3000/duanxin", {
                params: {
                    mobile: len,
                    tpl_id: 147606,
                    tpl_value: ran,
                    key: "67dfc5f6fffc6ad20618381a0acfe4a2",
                    //更改key
                }
            }).then(function (res) {
                console.log(res);
            })

            if (this.state.liked) {

                this.timer = setInterval(function () {
                    var count = this.state.count;
                    this.state.liked = false;
                    count -= 1;
                    this.setState({
                        telinput: ""
                    });
                    if (count < 1) {
                        this.setState({
                            liked: true,
                            Verify: "重新发送",
                            telinput: len,
                            // rannum:""
                        });
                        count = 10;
                        clearInterval(this.timer);
                    }
                    this.setState({
                        count: count,

                    });
                }.bind(this), 1000);
            }
        } 
        else{
             message.error('请输入正确的手机号',0.5);
         }


    }
    //密码显示隐藏
    Mihide() {
        this.setState({
            show: !this.state.show
        })

    }
    register(){
        let { smsiput,miiput,telinput,isok,rannum} = this.state
    
        // message.success('This is a message of success',1);   
        // message.error('This is a message of error');     错误的提示
        let istrue = telinput.length == 11 && miiput.length >= 6 && smsiput.length == 4
        if(istrue&&isok){
            if(smsiput == rannum){
                 axios.post("http://localhost:3000/reg",
                     qs.stringify({
                        username:telinput,
                        password:miiput            
                     })
                 ).then(res =>{
                     if(res.data == "用户名已存在"){
                        message.error('用户名已存在',1);
                     }else if(res.data == "yes"){
                        //  console.log(this.props);
                        this.props.history.push('/login');
                     }else{
                        message.error('注册失败',1); 
                     }
                 })     
                
            }else{
                message.error('短信验证码错误',1);   
            }
               
        }


    }


    //同意协议
    changeisok() {
        this.setState({
            isok: !this.state.isok
        })
    }
  

    
   
    render() {

        let { telinput, show,smsiput,miiput,isok,teltrue,rannum,smstrue} = this.state
        let istrue = telinput.length == 11 && miiput.length>= 6 && smsiput.length== 4
        console.log(rannum);
        return (
            <section className="login_cont">
                <div className="login_logo"></div>
                <div className="login_box_duan">
                    <div className="login_box_xiao">
                        <i className="icon icon_phone"></i>
                        <input type="text" maxLength="11" placeholder="手机号" onChange={this.handelChange.bind(this)} ref="ipt"  
                                                                                 onBlur = {this.telfocus.bind(this)}
                                                                                onClick ={this.changetelture.bind(this)}  />
                        <i className="icon icon_unfinished"
                            style={telinput.length && teltrue  ? { display: "block" } : { display: "none" }}
                            onClick={this.cleartext.bind(this)}
                          ></i>
                    </div>

                    <div className={["btn btn_x", telinput.length == "11" ? "disabled" : null].join(" ")}
                        onClick={this.getVerify.bind(this, telinput)}>
                        {
                            this.state.liked ? this.state.Verify : this.state.count + "秒"
                        }

                    </div>
                </div>
                <div className="login_box">
                    <i className="icon icon_mail"></i>

                    <input type="text" placeholder="请输入短信动态码"
                        onChange={this.smsiput.bind(this)} ref="sms" 
                        onBlur = {this.smsfocus.bind(this)}
                        onClick ={this.changesmsture.bind(this)}
                      />

                    <i className="icon icon_unfinished" style={smsiput.length && smstrue ? { display: "block" } : { display: "none" }}
                        onClick={this.clearsms.bind(this)}   ></i>
                </div>

                <div className="login_box password">
                    <i className="icon icon_lock"></i>
                    <input maxLength="16" minLength="6" placeholder="密码：6-16位字符" type={show == true ? "text" : "password"}
                        onChange={this.miiput.bind(this)}   ref="mima" />
                    <i className="icon icon_unfinished" style={miiput.length > 0 ? { display: "block" } : { display: "none" }}
                        onClick={this.clearmima.bind(this)}></i>
                    {/* className={["btn btn_x",telinput.length == "11"? "disabled":null].join(" ")} */}
                    <i className={["icon icon_password_hide", show == true ? "icon_password_show" : null].join(" ")} onClick={this.Mihide.bind(this)}></i>
                </div>
                <div data-type="phonelogin" className={["btn btn_login", istrue && isok   == true ? 'btn_login_on' : null].join(" ")} 
                    onClick={this.register.bind(this)}>立即注册</div>


                <div className="newagree">
                    <div className="logncheckbox">
                        <div className="dd" onClick={this.changeisok.bind(this)}>
                            {/* style={this.state.isok == true?{top:"-10000px"}:{ top:"0px" }} */}
                            <i className="icon icon_selected"
                                style={isok == true ? { display: "block" } : { display: "none" }}
                            ></i>
                        </div>
                    </div>同意 <a href="javascript:;;" className="">《喜地用户协议》</a>
                </div>
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

Rsection = withRouter(Rsection);

export default Rsection 