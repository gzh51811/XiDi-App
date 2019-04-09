import React, { Component } from 'react';

import * as Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';


class MySwiper extends Component {

    componentDidUpdate() {
        setTimeout(() => {
            new Swiper(this.swiperID, {
                loop: true,
                observer: true,
                observeParents: true,
                autoplayDisableOnInteraction : false,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: this.refs.pagination,
                }
    
            })            
        }, 200);
    }

    render() {
        return (
            <div data-v-75a61c74="" className="Homeswiper" style={{ marginBottom: '10px',marginTop : '4rem' }}>
                <div className="swiper-container" ref={self => this.swiperID = self}>

                    <div className="swiper-wrapper">
                        {
                            this.props.banners ? (
                                this.props.banners.map((item, idx) => {
                                    return (
                                        <div className="imgItem swiper-slide" style={{ width: '375px' }} key={idx}>
                                            <a href="/#/list">
                                                <img src={item.img} className="swiper-img" />
                                            </a>
                                        </div>
                                    )
                                })
                            ) : ''
                        }
                    </div>
                    <div className="swiper-pagination" ref="pagination" />
                </div>
            </div>
        );
    }
}

export default MySwiper;
