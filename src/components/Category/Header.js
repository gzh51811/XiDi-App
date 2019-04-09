import React from 'react'

import './style/Header.css'

import {withRouter} from 'react-router-dom'

class Header extends React.Component {
    gotoSearch(){
        let {history} = this.props;
        // history.push({
        //     pathname : '/search'
        // });
        console.log(666);
    }

    render(){

        return (
            <header data-v-99a1dd56="" className="header headFixed" onClick={this.gotoSearch.bind(this)}>
                <div data-v-7f444869="" data-v-99a1dd56="" className="headerBox">
                    <div data-v-7f444869="" className="search_title" style={{marginLeft: '0px'}}>
                        <div data-v-7f444869="" className="title_box">
                            去喜地，逛世界
                        </div>
                        <i data-v-7f444869="" className="icon icon_search">
                        </i>
                    </div>
                </div>
            </header>
        )
    }
}

Header = withRouter(Header);

export default Header;