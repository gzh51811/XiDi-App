import React from 'react';


class Rsection extends React.Component {
    render() {
        return (
            <section className="login_cont">
                <div className="login_logo"></div>
                <div className="login_box_duan">
                    <div className="login_box_xiao">
                        <i className="icon icon_phone"></i>
                        <input type="text" maxLength="11" data-hint="0" placeholder="手机号" />
                        <i className="icon icon_unfinished" style={{display: "none"}}></i>
                    </div>
                    <div className="btn btn_x">获取验证码</div>
                </div>
                <div className="login_box">
                    <i className="icon icon_mail"></i>
                    <input type="text" data-hint="0" placeholder="请输入短信动态码" />
                    <i className="icon icon_unfinished" style={{display: "none"}}></i>
                </div>

                <div className="login_box password"><i className="icon icon_lock"></i>
                    <input maxLength="16" minLength="6" placeholder="密码：6-16位字符" type="password" />
                    <i className="icon icon_unfinished" style={{display: "none"}}></i>
                    <i className="icon icon_password_hide "></i>
                </div>
                <div data-type="phonelogin" className="btn btn_login">立即注册</div>
                <div className="newagree">
                    <div className="logncheckbox">
                        <div className="dd">
                            <i className="icon icon_selected"></i>
                        </div>
                    </div>同意 <a href="/register/policy" className="">《喜地用户协议》</a>
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

export default Rsection 