import React, { Component } from 'react';

import * as Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';


class MySwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [
                {
                    href: "https://m.xidibuy.com/special/416zhijiang",
                    imgUrl: "https://image.xidibuy.com/common/common.e29e81bff967004a74e99a97997d8bd932fe2afc1696495dbf5aa4c4361a27fb.jpeg/640"
                },
                {
                    href: "/#/list",
                    imgUrl: "https://image.xidibuy.com/common/common.8e383668cc0d04cf45ff1bf106b1e7cb7be1ddb675ef33e6bf5aa4c4361a27fb.jpeg/640x320/640"
                },
                {
                    href: "/#/list",
                    imgUrl: "https://image.xidibuy.com/common/common.e29e81bff967004a74e99a97997d8bd932fe2afc1696495dbf5aa4c4361a27fb.jpeg/640"
                },
                {
                    href: "/#/list",
                    imgUrl: "https://image.xidibuy.com/common/common.8e383668cc0d04cf45ff1bf106b1e7cb7be1ddb675ef33e6bf5aa4c4361a27fb.jpeg/640x320/640"
                }
            ],

        };
    }

    componentDidMount() {
        new Swiper(this.swiperID, {
            loop: true,
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            pagination: {
                el: this.paginateID,
            }
        })
    }


    render() {
        return (
            <div data-v-75a61c74="" className="Homeswiper" style={{marginBottom : '10px'}}>
                <div className="swiper-container"  ref={self => this.swiperID = self}>

                    <div className="swiper-wrapper">
                        {
                            this.state.dataList.map((item, idx) => {
                                return (
                                    <div className="imgItem swiper-slide" style={{ width: '375px' }} key={idx}>
                                        <a href={item.href}>
                                            <img src={item.imgUrl} className="swiper-img"/>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination"  ref={self => this.paginateID = self}/>
                </div>
            </div>
        );
    }
}

export default MySwiper;
