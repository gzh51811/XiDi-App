import React from 'react'

import Swiper from 'swiper'

class Zhutu extends React.Component {

    componentDidUpdate() {
        if (this.swiper != null) return;
        this.mySwiper = new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // autoplay: true
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,//修改swiper的父元素时，自动初始化swiper
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }

    render() {
        let {goods} = this.props;
        return (
            <div data-v-08814b0b="" className="detail-preview">
                <div className="swiper-container" >
                    <div className="swiper-wrapper">
                        {
                            goods.imgList ? goods.imgList.mainImgs.map(item => (
                                <div className="swiper-slide" key={item}>
                                    <img style={{width: '100%'}}
                                         src={"https://image.xidibuy.com/" + item}
                                         alt=""/>
                                </div>
                            )) : null
                        }
                    </div>
                    <div className="swiper-pagination">
                    </div>
                </div>
                <div data-v-08814b0b="" className="detail-control">
                    <div data-v-08814b0b="" id="collectBtn" className="goods-operating">
                        <span data-v-08814b0b="" className="icon-box">
                        <i data-v-08814b0b="" className="icon icon_unfavorite">
                        </i>
                        </span>
                    </div>
                </div>
                <div data-v-08814b0b="" className="new_icon_hchud">
                    <img data-v-08814b0b=""
                         src="https://static.xidibuy.com/m/static/global/images/1.0.0/new_icon_hchud.png"/>
                </div>
            </div>
        )
    }
}

export default Zhutu;