import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import cartAction, { update_total, removeGoods } from '../../actions/cartAction';



class CartSection extends React.Component {

    checkAll = e => {
        var spanAll = document.querySelector('.checkAll');
        var spanList = document.querySelectorAll('.icon_complete_circle');
        var total = 0;

        if (spanAll.classList.contains('checked')) {
            //取消全选
            [].map.call(spanList, item => {
                return item.classList.remove('checked');
            });

        } else {
            //全选
            [].map.call(spanList, item => {
                return item.classList.add('checked');
            });

            this.props.count.cart.goodslist.map(item => {
                total += item.qty * item.data.price;
                return;
            })
        }

        //更新总价
        this.props.dispatch(update_total(total));
    }

    checkItem = (id, e) => {
        var spanAll = document.querySelector('.checkAll');
        var spanItems = document.querySelectorAll('.checkItem');
        var target = e.target;
        var cartInfo = this.props.count.cart;
        var total = cartInfo.total;

        if (target.classList.contains('checked')) {
            target.classList.remove('checked');
            //取消全选
            spanAll.classList.remove('checked');

            //金额计算
            [].map.call(cartInfo.goodslist, item => {
                if (item._id == id) {
                    total -= item.qty * item.data.price;
                }
                return;
            })


        } else {
            target.children[0].classList.add('checked');

            //添加全选
            var flag = [].every.call(spanItems, item => {
                return item.classList.contains('checked');
            });

            if (flag) {
                spanAll.classList.add('checked');
            }

            [].map.call(cartInfo.goodslist, item => {
                if (item._id == id) {
                    total += item.qty * item.data.price;
                }
                return;
            })
        }
        //更新总价
        this.props.dispatch(update_total(total));
    }


    reduce = e => {
        console.log('-')
    }

    increace = e => {
        console.log('+')
    }

    deleteItem = async (gid, e) => {
        // var flag = confirm('您忍心放弃我吗?');
        // console.log(flag);
        var flag = true;

        if (flag) {
            //删除商品
            this.props.dispatch(removeGoods(1, gid));

            setTimeout((() => {

                var spanItems = document.querySelectorAll('.checkItem');
                var goodslist = this.props.count.cart.goodslist;
                var total = 0;
                console.log(goodslist);
                [].map.call(spanItems, (item, idx) => {
                    if (item.classList.contains('checked')) {
                        total += goodslist[idx].qty * goodslist[idx].data.price;
                    }
                })
    
                console.log(total);
    
                //更新总价
                this.props.dispatch(update_total(total));
                
            }).bind(this), 50);




        }
    }


    render() {
        return (

            <div data-v-59dce934="" style={{ marginTop: "0px" }}>
                <div data-v-59dce934="" className="cart-section">
                    <div data-v-59dce934="" className="freeDelivery">全场满98元免邮</div>
                    <div data-v-59dce934="" className="cart-list">
                        <div data-v-59dce934="" className="shopbox">
                            <div data-v-59dce934="" className="shoptitlebox" style={{ height: '4rem' }}>
                                <div data-v-59dce934="" className="cart-check">
                                    <div data-v-59dce934="" className="cart-check-box" onClick={this.checkAll}>
                                        <span data-v-59dce934="" className="icon icon_complete_circle checkAll"></span>
                                    </div>
                                </div>
                                <div data-v-59dce934="" className="shoptitle"><a data-v-59dce934="" href="//shop616.m.xidibuy.com/shop">DHT, 德国原产锅具品牌</a>
                                </div> <a data-v-59dce934="" href="//shop616.m.xidibuy.com/shop"><i data-v-59dce934="" className="icon icon_triangle_right"></i></a>
                            </div>
                            <div data-v-59dce934="" className="shopbox_bottom"></div>
                            {
                                this.props.data.map(item => {
                                    return (
                                        <div data-v-59dce934="" className="cart-box" key={item._id}>
                                            <div data-v-59dce934="" className="cart-module">
                                                <div data-v-59dce934="" className="cart-column cart-check">
                                                    <div data-v-59dce934="" className="cart-check-box" onClick={this.checkItem.bind(this, item._id)}>
                                                        <span data-v-59dce934="" className="icon icon_complete_circle checkItem"  ></span>
                                                    </div>
                                                </div>
                                                <div data-v-59dce934="" className="cart-column">
                                                    <div data-v-59dce934="" className="cart-goods-info clearfix">
                                                        <div data-v-59dce934="" className="cart-column cart-img">
                                                            <a data-v-59dce934="" href="/detail/20910" className="">
                                                                <img data-v-59dce934="" src={"https://image.xidibuy.com/" + item.data.imgList.mainImgs[0]}
                                                                />
                                                            </a>
                                                        </div>
                                                        <div data-v-59dce934="" className="cart-column cart-width">
                                                            <div data-v-59dce934="" className="cart-goods-intro">
                                                                <div data-v-59dce934="" className="intro-left">
                                                                    <h3 data-v-59dce934="" className="cart-goods-name">
                                                                        <a data-v-59dce934="" href="/detail/20910" className="">{item.data.goodsName}</a>
                                                                    </h3>
                                                                    <p data-v-59dce934="" className="cart-goods-attr">黑色</p>
                                                                </div>
                                                                <div data-v-59dce934="" className="cart-goods-price">¥{item.data.price}</div>
                                                            </div>
                                                            <div data-v-59dce934="" className="cart-counter">
                                                                <div data-v-59dce934="" className="counter">
                                                                    <span data-v-59dce934="" xa-tap="cart|m-reduceCart" className="reduce disabled" onClick={this.reduce}></span>
                                                                    <var data-v-59dce934="" xa-tap="cart|m-buyNum" className="buyNum">{item.qty}</var>
                                                                    <span data-v-59dce934="" xa-tap="cart|m-increase" className="increase" onClick={this.increace}></span>
                                                                </div>
                                                                <div data-v-59dce934="" className="cart-goods-notice">
                                                                    <p data-v-59dce934="" data-class="remove" className="icon icon_clear" onClick={this.deleteItem.bind(this, item.data.goodsId)}></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}


const mapStateToProps = state => ({
    count: state
});

// export default connect(mapStateToProps,dispatch=>bindActionCreators(cartAction,dispatch))(CartSection);
export default connect(mapStateToProps)(CartSection);

