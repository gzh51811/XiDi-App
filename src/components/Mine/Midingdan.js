import React from 'react'


class Midingdan extends React.Component {
    render() {
        return (
            <div  id="appendChat" className="account-article">
                <a  href="javascript:;"  className="space-outer">
                    <span  className="icon-span">
                        <i  className="icon icon_space_order"></i>
                    </span>
                    <strong  className="space-nav">我的订单</strong>
                    <span  className="space-info">
                        <i  className="icon icon_triangle_right"></i>
                    </span>
                </a>
                <a  href="javascript:;" className="space-outer">
                    <span  className="icon-span">
                        <i  className="icon icon_coupon"></i>
                    </span>
                    <strong  className="space-nav">我的优惠</strong>
                    <span  className="space-info">
                        <i  className="icon icon_triangle_right"></i>
                    </span>
                </a>
                <a  href="javascript:;" className="space-outer">
                    <span  className="icon-span">
                        <i  className="icon icon_space_favorite"></i>
                    </span>
                    <strong  className="space-nav">我的喜欢</strong>
                    <span  className="space-info">
                        <i  className="icon icon_triangle_right"></i>
                    </span>
                </a>
                <a  href="javascript:;"  className="space-outer">
                    <span  className="icon-span">
                        <i  className="icon icon_space_address"></i>
                    </span>
                    <strong  className="space-nav">收货地址</strong>
                    <span  className="space-info">
                        <em  className="space-notice"></em>
                        <i  className="icon icon_triangle_right"> </i>
                    </span>
                </a>
                <a
                     href="javascript:;" className="space-outer">
                    <span  className="icon-span">
                        <i  className="icon icon_me_reback"></i>
                    </span>
                    <strong  className="space-nav">退货退款</strong>
                    <span  className="space-info">
                        <i  className="icon icon_triangle_right"></i>
                    </span>
                </a>
            </div>
        )
    }

}
export default Midingdan