import React from 'react'

let CommendBtn = (props) => {
    if (!props.goods.comment) {
        return '';
    }
    let {starsAverage, total_items} = props.goods.comment;
    return (
        <div data-v-08814b0b="" className="detail_evaluation">
            <div data-v-08814b0b="" className="evaluation_box clearfix">
                <div data-v-08814b0b="" className="evaluation_box_left">
                    用户评价
                    <span data-v-08814b0b="">
                    ({total_items})
                </span>
                </div>
                <div data-v-08814b0b="" className="evaluation_box_right">
                    <span data-v-08814b0b="">
                    商品评分
                    <span data-v-08814b0b="">
                        {starsAverage}
                </span>
                </span>
                    <i data-v-08814b0b="" className="icon icon_triangle_right">
                    </i>
                </div>
            </div>
        </div>
    )
}

export default CommendBtn;