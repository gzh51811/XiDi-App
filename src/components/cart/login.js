import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


class login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    logIn = ()=>{
        this.props.history.push('/mine');
    }
    render() {
        return (
            <div data-v-59dce934="" className="cart_login">
                <div data-v-59dce934="" className="login_box">
                    <p data-v-59dce934="">您可以在登录后查看之前加入购物车的商品<span data-v-59dce934="" className="login" onClick={this.logIn}>登录</span>
                    </p>
                </div>
            </div>

        );
    }
}

login = withRouter(login);
export default login;
