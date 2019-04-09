import React from 'react';

import Header from '../../components/cart/header';
import Login from '../../components/cart/login';
import Purchase from '../../components/cart/purchase';
import Command from '../../components/cart/command';

class Cart extends React.Component {
    componentWillUnmount(){
        let {location} =this.props;
        let path = location.pathname
        localStorage.setItem("luyou",path)
    }
    render() {
        return (
            <div className="cart">
                <Header />
                <Login />
                <Purchase />
                <Command />
            </div>

        )
    }

}

export default Cart