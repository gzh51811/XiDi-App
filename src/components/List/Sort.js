import React from 'react'

import './style/sort.css'

class Sort extends React.Component {
    constructor(){
        super();
        this.state = {
            flag : true,
            cur : 'all'
        }
    }

    render() {
        let {changeSort} = this.props;
        let {cur,flag} = this.state;
        return (
            <div data-v-26de577f="" className="group-navbar-zhangwei">
                <div data-v-26de577f="" className="navbar-sort">
                    <div data-v-26de577f="" className="navbar-sort-list">
                        <div data-v-26de577f="" data-order="0"
                             className={cur === 'all' ? "navbar-sort-item on" : 'navbar-sort-item'} onClick={()=>{
                            changeSort('all');
                            this.setState({
                                cur : 'all'
                            })
                        }}>综合
                        </div>
                        <div data-v-26de577f="" data-order="2"
                             className={cur === 'sale' ?"navbar-sort-item on" : "navbar-sort-item"} onClick={()=>{
                            changeSort('sale');
                            this.setState({
                                cur : 'sale'
                            })
                        }}>销量
                        </div>
                        <div data-v-26de577f="" data-order="5"
                             className={cur === 'time' ?'navbar-sort-item on' : "navbar-sort-item"} onClick={()=>{
                            changeSort('time');
                            this.setState({
                                cur : 'time'
                            })
                        }}>新品
                        </div>
                        <div data-v-26de577f="" data-order="3"
                             className={cur === 'price' ?"navbar-sort-item on" : "navbar-sort-item"} onClick={()=>{
                            this.setState({
                                flag : !this.state.flag,
                                cur : 'price'
                            },()=>{
                                changeSort('price',this.state.flag);
                            })
                        }}>价格
                            <div data-v-26de577f="" className="triangle_all">
                                <i data-v-26de577f="" data-order="3" className={flag ? "icon icon_triangle_up to" :"icon icon_triangle_up" }>
                                </i>
                                <i data-v-26de577f="" data-order="3" className={flag ? "icon icon_triangle_down" : "icon icon_triangle_down to"}>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
                <section data-v-2ddec00e="" data-v-26de577f="" className="goFilter"
                         style={{display: "none"}}>
                    <div data-v-2ddec00e="" className="filterBox">
                    </div>
                    <div data-v-2ddec00e="" className="filterCont">
                        <div data-v-2ddec00e="" className="bottom-btn">
                            <div data-v-2ddec00e="" className="btn btn-reset">重置</div>
                            <div data-v-2ddec00e="" className="btn btn-determine">确定</div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Sort;