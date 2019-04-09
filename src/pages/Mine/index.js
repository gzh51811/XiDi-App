import React from 'react'

import './Mines.css'

import Miheader from "../../components/Mine/Miheader"
import Miusername from '../../components/Mine/Miusername'
import Midingdan from '../../components/Mine/Midingdan'
import Mikefu from '../../components/Mine/Mikefu'
import Mituichu from '../../components/Mine/Mituichu'
import Mitangchuang from '../../components/Mine/Mitanchuang'



class Mine extends React.Component {
    constructor() {
        super();
        this.state = {
            tanchuang: false
        }
    }


    componentDidMount() {
        let user = localStorage.getItem("username");
        if (user) {

        }else{
            this.props.history.push('/login')
        }

    }
    
    //退出状态
    changetc(bool) {
        this.setState({
            tanchuang: bool
        })
    }



    render() {
        let { tanchuang } = this.state

        return (

            <div>

                <div className="member-space">
                    <Miheader />
                    <div className="content">
                        <div className="account-section">
                            <Miusername />
                            <Midingdan />
                            <Mikefu />
                            <Mituichu changetc={this.changetc.bind(this)} />
                            {
                                tanchuang ? <Mitangchuang changetc={this.changetc.bind(this)}
                                /> : null
                            }

                        </div>
                    </div>
                </div>




            </div>
        )
    }
}

export default Mine