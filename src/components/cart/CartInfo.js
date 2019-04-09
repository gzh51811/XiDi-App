import React, { Component } from 'react';

class CartInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (

            <div data-v-59dce934="" className="both-fixed-button cartInfo" style={{padding: "0px"}}>
                <div data-v-59dce934="" className="cart-column cart-check">
                    <input data-v-59dce934="" type="checkbox" />
                    <label data-v-59dce934="" data-select="checked" className="cart-check-box"><span data-v-59dce934="" className="icon icon_complete_circle checked"></span>
                    </label>
                </div>
                <div data-v-59dce934="" className="allselect">全选</div>
                <div data-v-59dce934="" className="cart-info">
                    <p data-v-59dce934="" className="cart-total">总计：<span data-v-59dce934="" data-class ="total" data-total="">¥{this.props.total}</span>
                    </p>
                    <p data-v-59dce934="" data-class = "fee" className="cart-fee">运费 <span data-v-59dce934="">¥0.00</span>  减免 <span data-v-59dce934="">¥0.00</span>
                    </p>
                </div>
                <div data-v-59dce934="" className="button-light settlement">结算(<var data-v-59dce934="" data-class="totalCount">1</var>)</div>
            </div>
            
        );
    }
}

export default CartInfo;
