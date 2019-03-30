import React from 'react';

import '../../style/Xfooter.css';

class Xfooter extends React.Component {
    constructor() {
        super();
        this.state = {
            navlist: [{
                title: "首页",
                name: "home",
                path: "/home",
            },
            {
                title: "国家馆",
                name: "nation",
                path: "/nation",
            },
            {
                title: "分类",
                name: "list",
                path: "/list",
            },
            {
                title: "购物车",
                name: "cart",
                path: "/cart",
            },
            {
                title: "我",
                name: "mine",
                path: "/mine",
            }]
        }

    }
    render() {
        let{navlist} = this.state
        return <section className="foot_tab clearfix">
                            <ul className="clearfix">
                                <li>
                                    <div className="link oversea-origin on">
                                        <i className="icon icon_homenew_on"></i>
                                        <div>首页</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="link factory-parity">
                                        <i className="icon icon_country2"></i>
                                        <div>国家馆</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="link certified-products">
                                        <i className="icon icon_classification"></i>
                                        <div>分类</div>
                                    </div>
                                </li> 
                                <li>
                                    <div className="link shanghai-postal">
                                        <i className="icon icon_Cart"></i>
                                        <div>购物车</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="link shanghai-postal">
                                        <i className="icon icon_me_unselected"></i>
                                        <div>我</div>
                                    </div>
                                </li>
                            </ul>
                      </section>
    }



}

export default Xfooter