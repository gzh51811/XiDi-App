import React from 'react'

class Buy extends React.Component {
    constructor() {
        super();
        this.state = {
            ipt: 1,
            confirm : true
        }
    }

    onChange(e) {
        let result = e.target.value;
        if (result < 1) {
            result = 1;
        }
        this.setState({
            ipt: result
        })
    }

    minus(value) {
        let res = value - 1;
        if (res === 0) {
            res = 1;
        }
        this.setState({
            ipt: res
        })
    }

    add(value) {
        this.setState({
            ipt: value * 1 + 1
        })
    }

    changeShow(e) {
        let {changeShow} = this.props;
        if (e.target.className === 'dialog-mask') {
            changeShow(false);
        }
    }

    confirmColor(e){
        if(e.target.tagName.toLowerCase() === 'span'){
            this.setState({
                confirm : !this.state.confirm
            })
        }
    }

    render() {
        let {goods, showBuy, changeShow} = this.props;
        let {ipt,confirm} = this.state;
        if (!goods.coverImg) {
            return '';
        }
        return (
            <div data-v-08814b0b="" className="buy-dialog" style={showBuy ? {display: 'block'} : {display: 'none'}}
                 onClick={this.changeShow.bind(this)}>
                <div data-v-08814b0b="" className="dialog-mask">
                </div>
                <div data-v-08814b0b="">
                    <div data-v-08814b0b="" className="goodsSku">
                        <div data-v-08814b0b="" className="skuSelect">
                            <div data-v-08814b0b="" className="skuSelect-img">
                                <img data-v-08814b0b=""
                                     src={'https://image.xidibuy.com/' + goods.coverImg[0]}
                                     className="0"/>
                            </div>
                            <div data-v-08814b0b="" className="skuSelect-sku">
                                <span data-v-08814b0b="" className="price">
                                    {'￥' + goods.price}
                                </span>
                                <span data-v-08814b0b="">
                                    <b data-v-08814b0b="">
                                    请选择颜色
                                    </b>
                                </span>
                                <div data-v-08814b0b="" className="skuSelect-close icon icon_close"
                                     onClick={changeShow.bind(this, false)}>
                                </div>
                            </div>
                        </div>
                        <div data-v-08814b0b="" className="detail_choice">
                            <div data-v-08814b0b="" className="choice_cont">
                                <dl data-v-08814b0b="" className="chioce_box k_color">
                                    <dt data-v-08814b0b="">颜色
                                    </dt>
                                    <dd data-v-08814b0b="" onClick={this.confirmColor.bind(this)}>
                                        {
                                            goods.priceAttr.map(item => (
                                                <span data-v-08814b0b="" data-allsize="" className={confirm ? 'on' : ''}
                                                      key={item.children[37].name}>
                                                    <b data-v-08814b0b="">
                                                        {item.children[37].name}
                                                    </b>
                                                </span>

                                            ))
                                        }
                                    </dd>
                                </dl>
                                <dl data-v-08814b0b="">
                                    <dt data-v-08814b0b="">
                                        数量
                                    </dt>
                                    <dd data-v-08814b0b="" className="clearfix">
                                        <div data-v-08814b0b="" id="goods-amount" className="goods-amount">
                                            <span data-v-08814b0b="" data-disabled={ipt > 1 ? "" : "disabled"}
                                                  className="goods-minus">
                                                <i data-v-08814b0b="" className="icon icon_cart_minus"
                                                   onClick={this.minus.bind(this, ipt)}>
                                                </i>
                                            </span>
                                            <input data-v-08814b0b="" type="tel" name="goods-num" data-stock="284"
                                                   min="1"
                                                   max="284" className="goods-num" value={ipt}
                                                   onChange={this.onChange.bind(this)}/>
                                            <span data-v-08814b0b="" className="goods-plus">
                                                <i data-v-08814b0b="" className="icon icon_cart_add"
                                                   onClick={this.add.bind(this, ipt)}>
                                                </i>
                                            </span>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div data-v-08814b0b="" className="goodsSku-sub">
                                            <span data-v-08814b0b="">
                                            确定
                                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Buy;