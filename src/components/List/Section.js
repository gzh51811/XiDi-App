import React from 'react'

import './style/section.css'

import {withRouter} from 'react-router-dom'

class Section extends React.Component {
    gotoDetails(id){
        let {history} = this.props;
        history.push({
            pathname : '/detail',
            search : '?id='+id
        })
    }

    render() {
        let {goodsList} = this.props;
        return (
            <section data-v-26de577f="" id="goods-products" className="products contentbox mt0">
                <ul data-v-26de577f="" className="product-list clearfix">
                    {
                        goodsList.map(goods => (
                            <li data-v-7a308020="" data-v-26de577f="" className="product_item" key={goods.data.goodsId}
                                onClick={this.gotoDetails.bind(this,goods.data.goodsId)}
                            >
                                <div data-v-7a308020="" className="product_box">
                                    <div data-v-7a308020="" className="product_img">
                                        <a data-v-7a308020="" href="javascript:;" className="">
                                            <img data-v-7a308020=""
                                                 data-src="https://image.xidibuy.com/shop/shop.ce00a3ab783c1d0ad5684a663ffe940b8ea394bd10b833263500842dd515aa3d.jpeg/1500x1500"
                                                 src={'https://image.xidibuy.com/' + goods.data.coverImg[0]}/>
                                        </a>
                                    </div>
                                    <div data-v-7a308020="" className="product_article">
                                        <h2 data-v-7a308020="" className="product_name">
                                            <a data-v-7a308020="" href="javascript:;" className="">
                                                {goods.data.name}
                                            </a>
                                        </h2>
                                        <div data-v-7a308020="" className="product_info clearfix">
                                            <p data-v-7a308020="" className="product_price">
                                                {goods.data.price}
                                            </p>
                                            <p data-v-7a308020="" className="product_country">
                                                {goods.data.countryInfo.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
        )
    }
}

Section = withRouter(Section);

export default Section;