import React from 'react';

function Mheader() {
    return (
        <header className="login_head">
            <div className="header_left"><i className="icon icon_triangle_left"></i>
            </div>
            <div className="login_title" style={{display:"none"}}>喜地-登录</div>
            <div className="header_right">
                <a href="/" className="router-link-active">
                    <i className="icon icon_home">
                    </i>
                </a>
            </div>
        </header>
    )

}

export default Mheader

