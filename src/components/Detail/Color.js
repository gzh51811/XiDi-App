import React from 'react'

let Color = ({changeShow}) => {
    return (
        <div data-v-08814b0b="" id="detail_choice" className="detail_choice">
            <div data-v-08814b0b="" id="choice_cont" className="choice_cont" onClick={changeShow.bind(this,true)} >
                    <span data-v-08814b0b="">
                        <b data-v-08814b0b="">
                        请选择颜色
                        </b>
                    </span>
                <i data-v-08814b0b="" className="icon icon_triangle_right icon-right">
                </i>
            </div>
        </div>
    )
}


export default Color;