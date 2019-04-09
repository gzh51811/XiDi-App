import React from 'react';

import { Link } from 'react-router-dom';

import Header from '../../components/home/header';
import Swiper from '../../components/home/swiper';
import HomeInfo from '../../components/home/homeInfo';
import IndexNav from '../../components/home/indexNav';
import Footer from '../../components/home/footer';

import Type1 from '../../components/home/Type1';
import Type3 from '../../components/home/Type3';
import Type4 from '../../components/home/Type4';
import Type6 from '../../components/home/Type6';
import Type10 from '../../components/home/Type10';
import LinkType2 from '../../components/home/LinkType2';
import LinkType3 from '../../components/home/LinkType3';

import { IP } from '../../config/config';

import withAxios from '../../hoc/withAxios';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            banners: null,
            datalist: [],
        };
    }


    timeLoadH = null

    componentDidMount() {

        // 请求数据
        this.props.axios.get(IP + '/home').then((res) => {
            this.setState({
                banners: res.data.slide,
                datalist: res.data.modules
            });
        })

        // 滚轮事件
        window.onscroll = function () {
            var sTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

<<<<<<< HEAD
            //回到顶部
            var topNode = this.refs.toTop;
            if (topNode) {
                if (sTop > 500) {
                    topNode.style.opacity = 1;
                } else {
                    topNode.style.opacity = 0;
                }
            }

=======
    componentWillUnmount(){
        let {location} =this.props;
        let path = location.pathname
        localStorage.setItem("luyou",path)
    }
>>>>>>> 68117a74e658bc035a1173683314428f14933e6e

            //图片懒加载
            var imgArr = document.querySelectorAll("img[lazy='loaded']");
            
            var seeHeight = document.body.offsetHeight;
            var seeWidth = document.body.offsetWidth;
            if (imgArr.length) {
                var defaultSrc = imgArr[imgArr.length - 1].src;
            }

            //节流
            clearTimeout(this.timeLoadH);
            this.timeLoadH = setTimeout(() => {

                for (let i = 0; i < imgArr.length; i++) {
                    let rect = imgArr[i].getBoundingClientRect();
                    if (rect.top <= seeHeight && imgArr[i].src == defaultSrc) {
                        imgArr[i].src = imgArr[i].getAttribute("data-src");
                    }

                }

            }, 200);


        }.bind(this);

    }

    goTop() {
        window.scrollTo(0, 0);
    }

    returnComponent(val) {
        if (val.linktype) {
            switch (val.linktype) {
                case 2:
                    return <LinkType2 data={val.data}></LinkType2>
                case 3:
                    return <LinkType3 data={val.data}></LinkType3>

            }
        } else {
            if (val.type) {
                switch (val.type) {
                    case 1:
                        return <Type1 data={val.data} moduletitle={val.moduletitle} ></Type1>
                    case 3:
                        return <Type3 data={val}></Type3>
                    case 4:
                        return <Type4 data={val.data}></Type4>
                    case 6:
                        return <Type6 data={val.data}></Type6>
                    case 10:
                        return <Type10 data={val}></Type10>
                }
            }
        }
    }

    render() {
        return (
            <div id="content_box" style={{ paddingBottom: "5rem" }}>
                <Header />
                <Swiper banners={this.state.banners} />
                <HomeInfo />
                <IndexNav />

                {

                    this.state.datalist.length ? (

                        this.state.datalist.map((item, key) => {
                            return (
                                <div key={key}>
                                    {this.returnComponent(item)}
                                </div>
                            )

                        })

                    ) : ''

                }


                <Footer />

                <div data-v-4695a911="" data-v-75a61c74="" className="backPageTop showFixedModule"
                    style={{ opacity: "0", marginBottom: '3rem' }} ref='toTop'
                    onClick={this.goTop}
                >
                    <div data-v-4695a911="" className="icon-box iconTop"><i data-v-4695a911="" className="icon icon_triangle_up"></i>
                    </div>
                </div>
            </div>

        )
    }

}

Home = withAxios(Home);

export default Home