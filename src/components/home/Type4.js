import React, { Component } from 'react';

class Type4 extends Component {
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
                                        <div data-v-676c6356="" className="product_item swiper-slide swiper-slide-prev" key={key}>
                                            <div data-v-676c6356="" className="product_box">
                                                <div data-v-676c6356="" className="product_img">
                                                    <div data-v-676c6356="" className="product-sku"><span data-v-676c6356="" className="product-sku-size">{item.skuNumbers}款</span>
                                                    </div>
                                                    <a data-v-676c6356="" href="/detail/22025" className="" xa-tap="index|m-list_slide_shop">
                                                        <div data-v-676c6356="" className="label">
                                                            <img data-v-676c6356="" src="//static.xidibuy.com/biz/app_label/875abfffd0b497adc84f95194eddc15e.png" />
                                                        </div>
                                                        <img data-v-676c6356="" data-src={item.coverImg} src=""
                                                            lazy="loaded" />
                                                    </a>
                                                </div>
                                                <div data-v-676c6356="" className="product_article">
                                                    <h2 data-v-676c6356="" className="product_name"><a data-v-676c6356="" href="/detail/22025" className="">{item.name}</a></h2>
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

                    </div>
                </div>
            </div>

        );
    }
}

export default Type4;