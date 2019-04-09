import React from 'react'
import {withRouter} from 'react-router-dom'

class Mitangchuang extends React.Component {
      tuichu(){
   
            localStorage.removeItem("username")
            let {changetc,history} =this.props
            changetc(false)

            history.push("/login");


    
    }

    render() {
        let {changetc} = this.props
        return (
            <div className="dialog">
                <div className="dialog-table">
                    <div className="dialog-cell">
                        <div className="dialog-section">
                            <div className="dialog-body">确认退出登录？</div>
                            <div className="dialog-foot">
                                <div className="dialog-cancel" onClick={changetc.bind(this,false)}>取消</div>
                                <div className="dialog-submit" onClick={this.tuichu.bind(this)}>确定</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Mitangchuang = withRouter(Mitangchuang)
export default Mitangchuang