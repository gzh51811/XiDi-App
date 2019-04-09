import React, { Component } from 'react';

import * as Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

class LinkType3 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        new Swiper(".swiper-container", {
            slidesPerView : 3,
            freeMode : true,
        })
    }

    render() {
        let dataList = this.props.data;
        return (
            <div data-v-75a61c74="" className="list_slide_shop sideslip">
                <div data-v-676c6356="" data-v-75a61c74="" className="swiper-container product_list clearfix ">
                    <div className="swiper-wrapper" >
                        {
                            dataList ? (
                                dataList.map((item, key) => {
                                    return (

                                        <div data-v-676c6356="" className="product_item swiper-slide" key={key}>
                                            <div data-v-676c6356="" className="product_box">
                                                <div data-v-676c6356="" className="product_img">
                                                    <a data-v-676c6356="" href="/detail/20953" className="" xa-tap="index|m-list_slide_shop">
                                                        <div data-v-676c6356="" className="label">
                                                            <img data-v-676c6356="" />
                                                        </div>
                                                        <img data-v-676c6356="" data-src={item.coverImg} src="" lazy="loaded" lazyw='loading' style={{width : '80%'}}/>
                                                    </a>
                                                </div>
                                                <div data-v-676c6356="" className="product_article">
                                                    <h2 data-v-676c6356="" className="product_name"><a data-v-676c6356="" href="/detail/20953" className="">{item.name}</a></h2>
                                                    <div data-v-676c6356="" className="clearfix">
                                                        <p data-v-676c6356="" className="product_price">¥{item.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            ) : ""
                        }

                        <div data-v-676c6356="" className="product_item swiper-slide" >
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