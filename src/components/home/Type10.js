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

            <div data-v-75a61c74="" className="list_one_shop">
                <h1 data-v-75a61c74="">— {moduletitle} —</h1>
                <ul data-v-75a61c74="" className="product_list clearfix">
                    {
                        dataList ? (
                            dataList.map((item, key) => {
                                return (

                                    <li data-v-75a61c74="" className="product_item" key={key} style={{marginBottom : '20px'}}>
                                        <div data-v-75a61c74="" className="product_box">
                                            <div data-v-75a61c74="" className="product_img" style={{ paddingBottom: "0" }}>
                                                <div data-v-75a61c74="" className="product-sku"><span data-v-75a61c74="" className="product-sku-size">{item.skuNumbers}款</span>
                                                </div>
                                                <a data-v-75a61c74="" href="/detail/1290" className="" xa-tap="index|m-list_one_shop" title="">
                                                    <div data-v-75a61c74="" className="label">
                                                        <img data-v-75a61c74="" />
                                                    </div>
                                                    <img data-v-75a61c74="" data-src={item.coverImg} src=""
                                                        lazy="loaded" />
                                                </a>
                                            </div>
                                            <div data-v-75a61c74="" className="product_article">
                                                <h2 data-v-75a61c74="" className="product_name1"><a data-v-75a61c74="" href="/detail/1290" className="">{item.slogan}</a></h2>
                                                <h2 data-v-75a61c74="" className="product_name" style={{ height: 'auto' }}><a data-v-75a61c74="" href="/detail/1290" className="">{item.name}</a></h2>
                                                <p data-v-75a61c74="" className="product_price">¥{item.price}</p>
                                                <div data-v-75a61c74="" className="shop_introduce">
                                                    <span data-v-75a61c74="" className="user_info">
                                                        <img data-v-75a61c74="" src="https://static.xidibuy.com/static/global/images/1.0.0/avator_10.jpg" />
                                                    </span>
                                                <span data-v-75a61c74="" className="user_comment">{item.comment}</span>
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








