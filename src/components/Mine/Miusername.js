import React from 'react'


class Miusername extends React.Component {
    render() {
        let user =localStorage.getItem("username");
        return (
            <div  className="space-article space-logo-span">
                <a  href="javascript:;" className="space-logo">
                    <p  className="space-avator">
                        <img  src="https://static.xidibuy.com/static/global/images/1.0.0/avator_02.jpg" />
                    </p>
                    <p  className="space-user">{user}</p> <i  className="icon icon_triangle_right"></i>
                </a>
            </div>
        )
    }
}

export default Miusername