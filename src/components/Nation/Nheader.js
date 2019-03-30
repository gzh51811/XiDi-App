import React from 'react'




class Nheader extends React.Component {
    render() {
        return (
            <div>
                <header className="header headFixed" style={{ top: "0px" }}>
                    <div className="headerBox">
                        <div>
                            <a href="/">
                                <i className="icon icon_logo_leaf"></i>
                                <i className="icon icon_xi"></i>
                                <i className="icon icon_di"></i>
                            </a>
                        </div>
                        <div className="search_start">
                            <i  className="icon icon_search"></i>逛世界</div>
                    </div>
                </header>
            </div>

        )

    }


}

export default Nheader