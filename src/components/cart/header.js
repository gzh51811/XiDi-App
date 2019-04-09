import React,{Component} from 'react';
import { withRouter } from 'react-router-dom'

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    goBack=()=>{
        this.props.history.goBack();
    }
    render() {
        return (
            <header data-v-84f2921a="" data-v-59dce934="" className="header">
                <i data-v-84f2921a="" className="icon icon_back" onClick={this.goBack}></i>
                <h2 data-v-84f2921a="" className="header-title">购物车</h2>
            </header>
        );
    }
}

header = withRouter(header);

export default header;

