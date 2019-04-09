import React, { Component } from 'react';

class Type6 extends Component {

    render() {
        return (

            <div data-v-75a61c74="" className="three_img">
                {
                    <div data-v-7d66aec9="" data-v-75a61c74="" className="three_img_box">
                        <div data-v-7d66aec9="" className="three_img_left">
                            <a data-v-7d66aec9="" xa-tap="index|m-three_img" href="javascript:;">
                                <div data-v-7d66aec9="" className="seize">
                                    <img data-v-7d66aec9="" data-src={`https://image.xidibuy.com/${this.props.data[0].img}`} src={`https://image.xidibuy.com/${this.props.data[0].img}`}
                                        lazy="loaded" />
                                </div>
                            </a>
                        </div>
                        <div data-v-7d66aec9="" className="three_img_right">
                            <div data-v-7d66aec9="" className="right_one">
                                <a data-v-7d66aec9="" xa-tap="index|m-three_img" href="javascript:;">
                                    <div data-v-7d66aec9="" className="seize">
                                        <img data-v-7d66aec9="" data-src={`https://image.xidibuy.com/${this.props.data[1].img}`} src={`https://image.xidibuy.com/${this.props.data[1].img}`}
                                            lazy="loaded" />
                                    </div>
                                </a>
                            </div>
                            <div data-v-7d66aec9="" className="right_two">
                                <a data-v-7d66aec9="" xa-tap="index|m-three_img" href="javascript:;">
                                    <div data-v-7d66aec9="" className="seize">
                                        <img data-v-7d66aec9="" data-src={`https://image.xidibuy.com/${this.props.data[2].img}`} src={`https://image.xidibuy.com/${this.props.data[2].img}`}
                                            lazy="loaded" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Type6;