import React from 'react'

let Introduce = (props)=>{
    if(!props.goods){
        return '';
    }
    return (
        <div data-v-08814b0b="" className="detail-section clearfix">
            <p data-v-08814b0b="">
                {props.goods.desc}
            </p>
        </div>
    )
}

export default Introduce;