import React, { Component } from 'react';

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: '-10000px',
            time: Date.now(),
            idx: 1,
            flag : true
        };
    }

    changeTop() {
        this.setState({
            top: '0px'
        })
    }

    downTop() {
        this.setState({
            top: '-10000px'
        })
    }

    onInput() {
        var newTime = Date.now();

    }

    render() {
        return (
            <div>
                <header data-v-1ea4c83e="" className="header headFixed" style={{ top: "0px" }}>
                    <div data-v-1ea4c83e="" className="headerBox">
                        <div data-v-1ea4c83e="">
                            <a data-v-1ea4c83e="" href="/">
                                <i data-v-1ea4c83e="" className="icon icon_logo_leaf"></i>
                                <i data-v-1ea4c83e="" className="icon icon_xi"></i>
                                <i data-v-1ea4c83e="" className="icon icon_di"></i>
                            </a>
                        </div>
                        <div data-v-1ea4c83e="" className="search_start" onClick={this.changeTop.bind(this)}>
                            <i data-v-1ea4c83e="" className="icon icon_search"></i>
                            逛世界
                    </div>
                    </div>
                </header>

                <div data-v-1c2ed110="" data-v-1ea4c83e="" className="search_cont wrapper" style={{ "top": this.state.top }}>
                    <div data-v-1c2ed110="" className="search_heard">
                        <div data-v-1c2ed110="" className="search_text">
                            <input data-v-1c2ed110="" id="search_key" maxLength="130" name="search_key" type="text" className="search_key"
                                placeholder="逛世界，去喜地" onKeyUp={this.onInput.bind(this)} />
                            <i data-v-1c2ed110="" className="icon icon_unfinished" style={{ display: "none" }}></i>
                            <i data-v-1c2ed110="" className="icon icon_search"></i>
                        </div>
                        <div data-v-1c2ed110="" className="back_clear" onClick={this.downTop.bind(this)}>取消</div>
                    </div>
                    <div data-v-1c2ed110="" className="search_list default">

                    </div>
                </div>
            </div>

        )
    }

}


export default header;



