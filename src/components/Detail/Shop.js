import React from 'react'

let Shop = (props) => {
    if(!props.goods.shopInfo){
        return '';
    }
    let {name,logo} = props.goods.shopInfo;
    return (
        <div data-v-08814b0b="" className="detail_introduction">
            <div data-v-08814b0b="" className="clearfix">
                <div data-v-08814b0b="" className="detail_imgtitle">
                    <img data-v-08814b0b=""
                         src={ logo }
                         width="100%"/>
                </div>
                <div data-v-08814b0b="" className="detail_imgconr">
                    <div data-v-08814b0b="" className="cont_title">
                        {name}
                    </div>
                    <div data-v-08814b0b="" className="cont_box">
                        <i data-v-08814b0b="" className="icon icon_unfavorite">
                        </i>
                        {props.goods.likeNum + '人喜欢'}
                    </div>
                </div>
            </div>
            <div data-v-08814b0b="" className="clearfix">
                <a data-v-08814b0b="" href="javascript:;" className="detail-brand-item" style={{width: "100%"}}>
                    <i data-v-08814b0b="" className="icon icon_shop">
                    </i>
                    进入厂店
                </a>
            </div>
        </div>
    )
}

export default Shop;