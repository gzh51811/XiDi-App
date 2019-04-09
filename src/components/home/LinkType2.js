import React, { Component } from 'react';
import Item from 'antd/lib/list/Item';

class LinkType3 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let dataList = this.props.data;

        return (

            <div data-v-75a61c74="" className="list_slide_shop sideslip">
                <div data-v-676c6356="" data-v-75a61c74="" className="swiper-container product_list clearfix swiper-container-horizontal swiper-container-free-mode">
                    <div className="swiper-wrapper" >

                        {
                            dataList ? (
                                dataList.map((item, key) => {
                                    return (

                                        <div data-v-676c6356="" className="product_item swiper-slide swiper-slide-active" style={{ width: "106.667px" }} key={key}>
                                            <div data-v-676c6356="" className="product_box">
                                                {
                                                    item.skuNumbers ? (
                                                        <div data-v-676c6356="" className="product_img">

                                                            <div data-v-676c6356="" className="product-sku"><span data-v-676c6356="" className="product-sku-size">{item.skuNumbers}款</span>
                                                            </div>
                                                            <a data-v-676c6356="" href="/detail/7501" className="" xa-tap="index|m-list_slide_shop">
                                                                <div data-v-676c6356="" className="label">
                                                                    <img data-v-676c6356="" />
                                                                </div>
                                                                <img data-v-676c6356="" data-src={item.coverImg} src=""
                                                                    lazy="loaded" />
                                                            </a>

                                                        </div>
                                                    ) : (
                                                            <div data-v-676c6356="" className="product_img">
                                                                <a data-v-676c6356="" href="/detail/11731" className="" xa-tap="index|m-list_slide_shop">
                                                                    <div data-v-676c6356="" className="label">
                                                                        <img data-v-676c6356="" />
                                                                    </div>
                                                                    <img data-v-676c6356="" data-src={item.coverImg} src="" lazy="loaded" />
                                                                </a>
                                                            </div>
                                                        )
                                                }

                                                <div data-v-676c6356="" className="product_article">
                                                    <h2 data-v-676c6356="" className="product_name"><a data-v-676c6356="" href="/detail/7501" className="">{item.name}</a></h2>
                                                    <div data-v-676c6356="" className="clearfix">
                                                        <p data-v-676c6356="" className="product_price">¥{item.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            ) : ''
                        }
                        <div data-v-676c6356="" className="product_item swiper-slide" style={{ width: "106.667px" }}>
                            <div data-v-676c6356="" className="product_box">
                                <div data-v-676c6356="" className="product_img">
                                    <a data-v-676c6356="" href="javascript:void(0);">
                                        <img data-v-676c6356="" src="https://static.xidibuy.com/m/static/global/images/1.0.0/see_more.jpg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default LinkType3;


