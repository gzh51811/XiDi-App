import React from 'react'

class Mikefu extends React.Component {
    render() {
        return (
            <div className="account-article">
                <a href="javascript:;" className="space-outer">
                    <span className="icon-span">
                        <i className="icon icon_space_faq"></i>
                    </span>
                    <strong className="space-nav">常见问题</strong>
                    <span className="space-info">
                        <i className="icon icon_triangle_right"></i>
                    </span>
                </a>
                <a href="javascript:;" className="space-outer">
                    <span className="icon-span">
                        <i className="icon icon_space_contact"></i>
                    </span>
                    <strong className="space-nav">联系客服</strong>
                    <span className="space-info">
                        <i className="icon icon_triangle_right"></i>
                    </span>
                </a> <a href="javascript:;" className="space-outer">
                    <span className="icon-span">
                        <i className="icon icon_space_feedback"></i>
                    </span>
                    <strong className="space-nav">意见反馈</strong>
                    <span className="space-info">
                        <i className="icon icon_triangle_right"></i>
                    </span>
                </a>
            </div>
        )
    }
}
export default Mikefu 