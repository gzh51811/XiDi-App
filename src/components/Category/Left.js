import React from 'react'

import './style/left.css'

let left = (props) => {
    let {navList,changeCur ,cur} = props;
    return (
        <div data-v-4d4f9a2d="" className="left_nav">
            <ul data-v-4d4f9a2d="" className="clearfix">
                {
                    navList.map((item,idx)=>{
                        return (
                            <li data-v-4d4f9a2d="" className={idx === cur ? 'on' : ''} key={item.name} onClick={changeCur.bind(this,idx)}>
                                {item.name}
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default left;