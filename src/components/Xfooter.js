import React from 'react';

import '../../style/Xfooter.css';

import {withRouter} from 'react-router-dom'

class Xfooter extends React.Component {
    constructor() {
        super();
        this.state = {
            navlist: [
                {
                    title: "首页",
                    name: "home",
                    path: "/",
                    icon : 'icon icon_homenew_on'
                },
                {
                    title: "国家馆",
                    name: "nation",
                    path: "/nation",
                    icon : 'icon icon_country2'
                },
                {
                    title: "分类",
                    name: "category",
                    path: "/category",
                    icon : 'icon icon_classification'
                },
                {
                    title: "购物车",
                    name: "cart",
                    path: "/cart",
                    icon : 'icon icon_Cart'
                },
                {
                    title: "我",
                    name: "mine",
                    path: "/mine",
                    icon : 'icon icon_me_unselected'
                }
            ]
        }
    }

    goto(path){
        let {history} = this.props;
        history.push({
            pathname : path
        })
    }

    render() {
        let {navlist} = this.state
        return <section className="foot_tab clearfix">
            <ul className="clearfix">
                    {
                        navlist.map(item=>(
                            <li key={item.name} onClick={this.goto.bind(this,item.path)}>
                                <div className="link ">
                                    <i className={item.icon}>
                                    </i>
                                    <div>{item.title}</div>
                                </div>
                            </li>
                        ))
                    }
            </ul>
        </section>
    }
}

Xfooter = withRouter(Xfooter);

export default Xfooter