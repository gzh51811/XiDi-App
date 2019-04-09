import React from 'react'
import Zhutu from "./Zhutu";
import Title from "./Title";
import Color from "./Color";
import Introduce from "./Introduce";
import Seven from "./Seven";
import Pinpai from "./Pinpai";
import Shop from "./Shop";
import CommendBtn from "./CommendBtn";

class Top extends React.Component {
    constructor(){
        super();
        this.state = {
        }
    }

    render(){
        return (
            <div data-v-08814b0b="" id="part1" className="part1" >
                <Zhutu goods={this.props.goods} />
                <Title goods={this.props.goods} />
                <Color changeShow={this.props.changeShow} />
                <Introduce goods={this.props.goods} />
                <Seven />
                <Pinpai goods={this.props.goods} />
                <Shop goods={this.props.goods} />
                <CommendBtn goods={this.props.goods} />
                {/*<Tuo />*/}
                {/*<Pingjia />*/}
            </div>
        )
    }
}

export default Top;