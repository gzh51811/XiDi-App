import React from 'react';
import { connect } from "react-redux"

import Header from '../../components/cart/header';
import Login from '../../components/cart/login';
import Purchase from '../../components/cart/purchase';
import Command from '../../components/cart/command';
import CartSection from '../../components/cart/CartSection';
import CartInfo from '../../components/cart/CartInfo';

class Cart extends React.Component {
    componentWillUnmount(){
        let {location} =this.props;
        let path = location.pathname
        localStorage.setItem("luyou",path)
    }
    render() {
        let goodsInfo = this.props.count.cart;

        return (
            <div className="cart">
                <Header />
                <Login />
                {
                    goodsInfo.goodslist ? <CartSection data={goodsInfo.goodslist}/> : <Purchase />
                }
                <Command />
                <CartInfo total={goodsInfo.total}/> 
            </div>

        )
    }



}

const mapStateToProps = state => ({
    count: state
});


export default connect(mapStateToProps)(Cart);