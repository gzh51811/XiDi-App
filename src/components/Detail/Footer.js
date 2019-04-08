import React from 'react'

class Footer extends React.Component {


    render() {
        let {changeShow} = this.props;
        return (
            <div data-v-08814b0b="" className="both-fixed-button">
                <div data-v-08814b0b="" className="goods-price">
                    <i data-v-08814b0b="" className="icon icon_chat">
                    </i>
                </div>
                <div data-v-08814b0b="" className="footer_cart">
                    <div data-v-08814b0b="" className="header-cart">
                        <i data-v-08814b0b="" className="icon icon_cart_full">
                        </i>
                    </div>
                </div>
                <div data-v-08814b0b="" className="button-light buyshop" onClick={changeShow.bind(true)} >
                    立即购买
                </div>
                <div data-v-08814b0b="" className="button-light" style={{padding: "0px"}} onClick={changeShow.bind(true)}>
                    加入购物车
                </div>
            </div>
        )
    }
}

export default Footer;