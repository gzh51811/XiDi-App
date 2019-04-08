import React from 'react'

let Pinpai = (props) => {
    if(!props.goods.brandInfo){
        return '';
    }
    let {logo,goodsNum} = props.goods.brandInfo;
    return (
        <div data-v-08814b0b="" className="detail_brand">
            <a data-v-08814b0b="" href="javascript:;">
            <div data-v-08814b0b="" className="brand_img">
                <img data-v-08814b0b="" src={"https://image.xidibuy.com/" + logo} alt="品牌logo" />
            </div>
            <div data-v-08814b0b="" className="brand_text">
                在售品牌商品
                <span data-v-08814b0b="">
                    ({goodsNum})
                </span>
            </div>
            <i data-v-08814b0b="" className="icon icon_triangle_right">
            </i>
        </a>
        </div>
)
}

export default Pinpai;