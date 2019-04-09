import React from 'react'

class Mituich extends React.Component {
    constructor(){
        super();
            this.state={
                tuichu:false
            }

    }
  
    render() {

        return (
            <div className="static-button">
                <div className="button-warning" onClick={this.props.changetc.bind(this,true)}>退出账号</div>
            </div>
        )
    }


}

export default Mituich