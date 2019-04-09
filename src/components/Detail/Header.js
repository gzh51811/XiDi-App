import React from 'react'

import './style/header.css'

import {withRouter} from 'react-router-dom'

class Header extends React.Component {

    goBack(){
        let {history} = this.props;
        history.goBack();
    }



    render() {
        return (
            <header data-v-08814b0b="" className="header" style={{position: "fixed", paddingLeft: "0px", zIndex: "100"}}>
                <div data-v-08814b0b="" className="headerBox">
                    <i data-v-08814b0b="" className="icon icon_back" onClick={this.goBack.bind(this)}>
                    </i>
                    <div data-v-08814b0b="" className="all_nav"
                         style={{margin: "0px -67px",visibility: "visible", width: "135px"}}>
                        <p>商品</p>
                    </div>
                    <div data-v-7e84d4c2="" data-v-08814b0b="" className="new_right">
                        <i data-v-7e84d4c2="" className="icon icon_more">
                        </i>
                        <div data-v-7e84d4c2="" className="hearder_more" style={{display: "none"}}>
                            <div data-v-7e84d4c2="" className="header_triangle">
                            </div>
                            <div data-v-7e84d4c2="" className="floating_cont">
                                <ul data-v-7e84d4c2="">
                                    <li data-v-7e84d4c2="">
                                        <i data-v-7e84d4c2="" className="icon icon_homenew">
                                        </i>
                                        首页
                                    </li>
                                    <li data-v-7e84d4c2="">
                                        <i data-v-7e84d4c2="" className="icon icon_search">
                                        </i>
                                        搜索
                                    </li>
                                    <li data-v-7e84d4c2="">
                                            <i data-v-7e84d4c2="" className="icon icon_cart_full">
                                            </i>
                                            购物车
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-08814b0b="" className="factory_nav" style={{display: "none"}}>
                    <div data-v-08814b0b="" className="main">
                        <div data-v-08814b0b="" className="swiper-container swiper-container-horizontal">
                            <div className="swiper-wrapper" style={{transitionDuration: "0ms"}}>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

Header = withRouter(Header);

export default Header;