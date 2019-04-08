import React from 'react';


class Xsearch extends React.Component{
    constructor(){
        super();
        this.state={
            hor:[{
                name:"WALTER WALLET"
            },{
                name:"厨具用品"
            },{
                name:"雪平锅"
            },{
                name:"蜂蜜"
            },{
                name:"Glaster"
            },{
                name:"保鲜盒"
            },
            {
                name:"Myungjin"
            },
            {
                name:"美容彩妆"
            },
            {
                name:"马克杯"
            }]

        }

    }
       render(){
        // style={this.state.isok == true?{top:"0px"}:{ top: "-10000px" }}
            let{hor} = this.state
            // console.log(this.props.isok);
          return(
            <div className="search_cont wrapper" style={this.props.isok == true?{top:"0px"}:{ top: "-10000px" }}>
            <div className="search_heard">
                <div className="search_text">
                    <input id="search_key" maxLength="130" name="search_key" type="text" className="search_key" placeholder="去喜地，逛世界" />
                    <i className="icon icon_unfinished" style={{ display: "none" }}></i>
                    <i className="icon icon_search"></i>
                </div>
                <div className="back_clear" onClick={this.props.search}>取消</div>
            </div>
            <div className="search_list default">

                <h1 >热门搜索</h1>
                <div className="listcont">
                  {
                      hor.map(item=> <div className="item" key={item.name}>{item.name}</div>)
                  }
                  
                </div>
            </div>
            <div className="login_list">
                <div className="login">
                    <i className="icon icon_me"></i>
                </div>
                <div className="tishiy">点击登录，查看更多历史搜索</div>
            </div>
        </div>)  
       } 
}


export default Xsearch