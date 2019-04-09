import React from 'react';

import { Link } from 'react-router-dom';

import Header from '../../components/home/header';
import Swiper from '../../components/home/swiper';
import HomeInfo from '../../components/home/homeInfo';
import IndexNav from '../../components/home/indexNav';
import ThreeImg from '../../components/home/threeImg';
import SingleImg from '../../components/home/singleImg';
import SingleListInfo from '../../components/home/singleListInfo';
import Footer from '../../components/home/footer';


class Home extends React.Component {

    //页面渲染

    componentWillUnmount(){
        let {location} =this.props;
        let path = location.pathname
        localStorage.setItem("luyou",path)
    }

    render() {
        return (
            <div style={{ paddingBottom: "5rem" }}>
                <Header />
                <Swiper />
                <HomeInfo />
                <IndexNav />
                <ThreeImg />
                <SingleImg />
                <SingleListInfo />
                <Footer />

                <div data-v-4695a911="" data-v-75a61c74="" className="backPageTop showFixedModule" style={{ opacity: "1", marginBottom: '3rem' }}>
                    <div data-v-4695a911="" className="icon-box iconTop"><i data-v-4695a911="" className="icon icon_triangle_up"></i>
                    </div>
                </div>
            </div>

        )
    }

}

export default Home