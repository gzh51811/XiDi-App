import React from 'react'

let Title = (props) => {
   let {goodsName ,priceMin ,countryInfo} = props.goods;
   if(!countryInfo){
       return '';
   }
    return (
        <div data-v-08814b0b="" className="detail-info clearfix">
            <h1 data-v-08814b0b="" className="detail-goods-name">
                {goodsName}
            </h1>
            <div data-v-08814b0b="" className="detail-tax clearfix">
                <p data-v-08814b0b="" data-class="product-price" className="detail-price">
                    {'￥'+ priceMin}
                </p>
                <p data-v-08814b0b="">
                    <img data-v-08814b0b="" src={"https://static.xidibuy.com/"+countryInfo.flag}/>
                    {countryInfo.name }
                </p>
            </div>
        </div>
    )
}

export default Title;