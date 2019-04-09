import React from 'react'

import Xsearch from '../Xsearch';



class Nheader extends React.Component {
    constructor() {
        super();
        this.state = {
            isok: false
        }
    }

    search(){
        this.setState({
            isok:!this.state.isok
        })
    }


    render() {
        // console.log(this.state.isok);
        return (
            <div>
                <header className="header headFixed" style={this.state.isok == true?{top:"-10000px"}:{ top:"0px" }}>
                    <div className="headerBox">
                        <div>
                            <a href="/">
                                <i className="icon icon_logo_leaf"></i>
                                <i className="icon icon_xi"></i>
                                <i className="icon icon_di"></i>
                            </a>
                        </div>
                        <div className="search_start" onClick={this.search.bind(this)}>
                            <i className="icon icon_search"></i>逛世界
                        </div>
                    </div>
                </header> 
                <Xsearch isok={this.state.isok} search={this.search.bind(this)}/>                             
               

            </div>

        )

    }


}



export default Nheader