import React from 'react'

import './style/Header.css'

class Header extends React.Component {


    render() {
        return (
            <div>
                <header data-v-6afe8af9="" className="header headFixed headFixed">
                    <div data-v-8d7463b0="" data-v-6afe8af9="" className="headerBox">
                        <i data-v-8d7463b0="" className="icon icon_back">
                        </i>
                        <h2 data-v-8d7463b0="" className="header-title-tepian">
                            <p data-v-8d7463b0="">锅具</p>
                        </h2>
                        <div data-v-8d7463b0="" className="header-right">
                            <div data-v-8d7463b0=""  className="search_title">
                                <i data-v-8d7463b0="" className="icon icon_search ">
                                </i>
                            </div>
                            <a data-v-8d7463b0="" href="javascript:void(0);" className="header-cart">
                                <i data-v-8d7463b0="" className="icon icon_cart_full">
                                </i>
                                <span data-v-8d7463b0="" className="header-cart-num">1</span>
                            </a>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;