import React from 'react';

import withAxios from '../../hoc/withAxios'

import './detail.css'

import qs from 'qs'

import Header from '../../components/Detail/Header'
import Top from '../../components/Detail/Top'
// import Bottom from '../../components/Detail/Bottom'
import Footer from "../../components/Detail/Footer";
import Buy from "../../components/Detail/Buy";

class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            goods: {},
            showBuy : false
        };
        this.getData = this.getData.bind(this);
    }

    componentWillMount() {
        this.getData();
    }

    componentDidUpdate(){
        this.getData();
    }

    async getData() {
        let {axios, location} = this.props;
        let id = location.search.split('=')[1];
        let goods = await axios({
            method: 'POST',
            headers: {"content-type": "application/x-www-form-urlencoded"},
            url: "/goods",
            data: qs.stringify({
                goodsId: id
            })
        })
        this.setState({
            goods: goods.data[0].data
        })
    }

    changeShow(bool){
        this.setState({
            showBuy : bool
        })
    }

    render() {
        return (
            <div data-v-08814b0b className="wrap">
                <Header/>
                <span data-v-08814b0b>
                    <div data-v-08814b0b className='content_3'>
                        <Top goods={this.state.goods} changeShow={this.changeShow.bind(this)} />
                        {/*<Bottom />*/}
                    </div>
                </span>
                <Footer changeShow={this.changeShow.bind(this)} />
                <Buy goods={this.state.goods} showBuy={this.state.showBuy} changeShow={this.changeShow.bind(this)} />
            </div>
        )
    }
}

Detail = withAxios(Detail);

export default Detail