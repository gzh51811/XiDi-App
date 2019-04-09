import React, { Component } from 'react';

class Type10 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let moduletitle = this.props.data.moduletitle;
        let dataList = this.props.data.data;
        return (
            <div data-v-75a61c74="" className="single_list_shop">
                <h1 data-v-75a61c74="">— {moduletitle} —</h1>
                <ul data-v-75a61c74="" className="product_list clearfix">

                    {
                        dataList ? (
                            dataList.map((item, key) => {
                                return (
                                    <li data-v-75a61c74="" className="product_item" key={key}>
                                        <div data-v-75a61c74="" className="product_box">
                                            <div data-v-75a61c74="" className="product_img">
                                                <a data-v-75a61c74="" href="/detail/22135" className="" xa-tap="index|m-single_list_shop">
                                                    <div data-v-75a61c74="" className="label">
                                                        <img data-v-75a61c74="" />
                                                    </div>
                                                    <img data-v-75a61c74="" data-src={item.coverImg} src=""
                                                        lazy="loaded" />
                                                </a>
                                            </div>
                                            <div data-v-75a61c74="" className="product_article" style={{ position: "relative", height: "116px" }}>
                                                <h2 data-v-75a61c74="" className="product_name"><a data-v-75a61c74="" href="/detail/22135" className="">{item.name}</a></h2>
                                                <div data-v-75a61c74="" className="clearfix product_info">
                                                    <p data-v-75a61c74="" className="product_price">¥{item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        ) : ''
                    }
                </ul>
            </div>

        );
    }
}

export default Type10;