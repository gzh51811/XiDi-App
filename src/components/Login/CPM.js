import React from 'react';

import {withRouter} from 'react-router-dom'

class CPM extends React.Component{

    goReg(){
        let {changecpm,history} = this.props
        changecpm(false)

        history.push('/register');
    }

    render(){
        let {changecpm} = this.props
        return(
            <div className="dialog">
                <div className="dialog-table">
                    <div className="dialog-cell">
                        <div className="dialog-section">
                            <div className="dialog-body">
                                <div>您输入的账号还未注册，请前往注册</div>
                            </div>
                            <div className="dialog-foot">
                                <div className="dialog-cancel" onClick={changecpm.bind(this,false)}>取消</div>
                                <div className="dialog-submit" onClick={this.goReg.bind(this)}>确定</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CPM = withRouter(CPM);
export default CPM