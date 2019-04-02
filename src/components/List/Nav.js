import React from 'react'

import './style/nav.css'

class Nav extends React.Component {
    constructor(){
        super();
        this.state = {
            navs : [
                {
                    name : '全部'
                },
                {
                    name : '汤锅'
                },
                {
                    name : '锅具配件'
                },
                {
                    name : '煎锅/平底锅'
                },
                {
                    name : '炒锅'
                },
                {
                    name : '烤锅'
                },
                {
                    name : '奶锅'
                },
                {
                    name : '蒸锅/深烧锅'
                },
                {
                    name : '高压锅/压力锅'
                },
                {
                    name : '珐琅铸铁锅'
                },
                {
                    name : '塔吉锅'
                },
                {
                    name : '锅具套装'
                },
                {
                    name : '炸锅'
                }
            ],
            cur : '全部'
        }
    }

    changeCur(name){
        this.setState({
            cur : name
        })
    }

    render(){
        let {navs,cur} = this.state;
        return (
            <div data-v-26de577f="" className="more-info mt48">
                <div data-v-26de577f="" className="tepin-subNav-zhangwei">
                    <div data-v-26de577f="" className="tepin-subNav">
                        <ul data-v-26de577f="" data-num="0">
                            {
                                navs.map(nav=>(
                                    <li data-v-26de577f="" className={cur === nav.name ? 'on' : ''} key={nav.name}
                                        onClick={this.changeCur.bind(this,nav.name)}>
                                        <div data-v-26de577f="" className="abox">{nav.name}</div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='zhe'>

                </div>
            </div>
        )
    }
}

export default Nav;