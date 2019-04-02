import React from 'react'

import './style/right.css'

import {NavLink} from 'react-router-dom'

let Right = (props) => {
    console.log(props);
    let {navList, cur} = props;
    return (
        <div data-v-4d4f9a2d="" className="rightall" style={{width: "285px"}}>
            {
                navList.map((item, idx) => (
                    <div data-v-4d4f9a2d="" id={"part" + idx} className="right_nav"
                         key={item.name} style={cur === idx ? {display: 'block'} : {display: 'none'}}
                    >
                        <ul data-v-4d4f9a2d="" className="clearfix">
                            {
                                item.children.map(goods => (
                                    <li data-v-4d4f9a2d="" key={goods.name}>
                                        <NavLink to={{pathname: '/list'}}>
                                            <div data-v-4d4f9a2d="" className="right_nav_box">
                                                <img data-v-4d4f9a2d=""
                                                     src={goods.image}/>
                                            </div>
                                            <div data-v-4d4f9a2d="" className="right_nav_box">{goods.name}</div>
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }


        </div>
    )
}


export default Right;