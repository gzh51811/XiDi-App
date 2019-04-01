import React from 'react';


class Msection extends React.Component {
    render() {
        return (
            <section className="login_cont">
                <div className="login_logo">
                    <a href="/"> 
                    <i className="icon icon_dalogo"></i>
                    </a>
                </div>
                <div className="login_box"> 
                <i className="icon icon_user"></i>
                    <input data-type="name" data-hint="0" type="text" placeholder="手机号/邮箱/用户名" data-buchu="0" /> 
                    <i className="icon icon_unfinished" style={{display: "none"}}></i>
                </div>
                <div className="login_box password"> 
                <i className="icon icon_lock"></i>

                    <input maxLength="16" minLength="6" placeholder="登录密码" type="password" />
                     <i className="icon icon_unfinished" style={{ display: 'none' }}></i>
                    <i className="icon icon_password_hide "></i>

                </div>
                <div data-type="commonlogin" className="btn btn_login">登录</div>
                <div className="login_text">
                    <div className="dynamiccodelogin">手机动态码登录</div> <a href="/findpw" className="">忘记密码</a>

                </div>
                <div className="btn btn_regis" style={{ display:'block', clear:'both'}}>快速注册</div>
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

export default Msection