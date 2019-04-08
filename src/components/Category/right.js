import React from 'react'

import './style/right.css'

import {NavLink} from 'react-router-dom'

class Right extends React.Component {
    constructor() {
        super();
        this.state = {
            distance: 0
        }
    }

    componentDidMount() {
        var startPosition = {x: 0, y: 0};
        var endPosition = {x: 0, y: 0};
        var distance = 0;
        let right = this.refs.right;
        right.ontouchstart = touch.bind(this);
        right.ontouchmove = touch.bind(this);
        right.ontouchend = touch.bind(this);

        function touch(e) {
            let {cur, navList, changeCur} = this.props;
            e = e || window.event;
            let type = e.type;
            switch (type) {
                case 'touchstart':
                    startPosition = {
                        x: e.touches[0].pageX,
                        y: e.touches[0].pageY
                    }
                    break;
                case 'touchend':
                    endPosition = {
                        x: e.changedTouches[0].pageX,
                        y: e.changedTouches[0].pageY
                    }
                    if (endPosition.y) {
                        distance = endPosition.y - startPosition.y;
                    } else {
                        distance = 0;
                    }
                    if (distance > 100) {
                        let current = cur - 1;
                        if (current < 0) {
                            current = 0
                        }
                        changeCur(current);
                    } else if (distance < -100) {
                        let current = cur + 1;
                        if (current >= navList.length) {
                            current = navList.length - 1
                        }
                        changeCur(current);
                    } else {
                        distance = 0;
                    }
                    this.setState({
                        distance: 0
                    }, () => {
                        for (let i = 0; i < navList.length; i++) {
                            this.refs['part' + i].style.transition = 'transform 0s';
                        }
                    })
                    for (let i = 0; i < navList.length; i++) {
                        this.refs['part' + i].style.transition = 'transform .5s';
                    }
                    break;
                case 'touchmove':
                    endPosition = {
                        x: e.touches[0].pageX,
                        y: e.touches[0].pageY
                    }
                    if (endPosition.y) {
                        distance = endPosition.y - startPosition.y;
                    } else {
                        distance = 0;
                    }
                    for (let i = 0; i < navList.length; i++) {
                        this.refs['part' + i].style.transition = 'transform 0s';
                    }
                    this.setState({
                        distance
                    })
                    break;
            }
        }
    }

    render() {
        let {navList, cur} = this.props;
        let {distance} = this.state;
        console.log(`translate3d(0px,(${667 + distance})px,0px)`);
        return (
            <div data-v-4d4f9a2d="" className="rightall" style={{width: "285px"}} ref='right'>
                {
                    navList.map((item, idx) => (
                        <div data-v-4d4f9a2d="" id={"part" + idx} className="right_nav" ref={'part' + idx}
                             key={item.name} style={cur === idx ? {
                                transform: `translate3d(0px,${distance}px,0px)`
                            } :
                            cur === idx - 1 ?
                                {transform: `translate3d(0px, ${667 + distance}px, 0px)`} :
                                cur === idx + 1 ?
                                    {transform: `translate3d(0px, ${-667 + distance}px, 0px)`} :
                                    cur > idx ? {
                                            transform: `translate3d(0px, -100% , 0px)`
                                        } :
                                        {transform: `translate3d(0px,100%, 0px)`}}
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
}


export default Right;