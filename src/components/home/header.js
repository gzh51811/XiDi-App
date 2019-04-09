import React, { Component } from 'react';
import qs from 'qs';
import {withRouter } from 'react-router';

class header extends Component {

    goSearch() {
        this.props.history.push('/search');
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
                        <div data-v-1ea4c83e="" className="search_start" onClick={this.goSearch.bind(this)}>
                            <i data-v-1ea4c83e="" className="icon icon_search"></i>
                            逛世界
                        </div>
                    </div>
                </header>
            </div>

        )
    }

}

header = withRouter(header);

export default header;



