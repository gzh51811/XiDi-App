import React, { Component } from 'react';

class Type6 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let item = this.props;
        return (
            <div data-v-75a61c74="" className="single_img">
                {
                    item.moduletitle ? <h1 data-v-75a61c74="">— {item.moduletitle} —</h1> : ''
                }
                <div data-v-75a61c74="" className="single_img">
                    <div data-v-75a61c74="" xa-tap="index|m-single_img" className="seize50">
                        <img data-v-75a61c74="" data-src={`https://image.xidibuy.com/${item.data[0].img}`} src=""
                            lazy="loaded" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Type6;