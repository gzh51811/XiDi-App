import React from 'react'

import Xsearch from '../Xsearch';



class Nheader extends React.Component {
    constructor() {
        super();
        this.state = {
            isok: false
        }
    }

    search(){
        this.setState({
            isok:!this.state.isok
        })
    }


    render() {
        // console.log(this.state.isok);
        return (
            <div>
                <header className="header headFixed" style={this.state.isok == true?{top:"-10000px"}:{ top:"0px" }}>
                    <div className="headerBox">
                        <div>
                            <a href="/">
                                <i className="icon icon_logo_leaf"></i>
                                <i className="icon icon_xi"></i>
                                <i className="icon icon_di"></i>
                            </a>
                        </div>
                        <div className="search_start" onClick={this.search.bind(this)}>
                            <i className="icon icon_search"></i>逛世界
                        </div>
                    </div>
                </header> 
                <Xsearch isok={this.state.isok} search={this.search.bind(this)}/>                             
                {/* <div className="search_cont wrapper" style={this.state.isok == true?{top:"0px"}:{ top: "-10000px" }}>
                    <div className="search_heard">
                        <div className="search_text">
                            <input id="search_key" maxLength="130" name="search_key" type="text" className="search_key" placeholder="去喜地，逛世界" />
                            <i className="icon icon_unfinished" style={{ display: "none" }}></i>
                            <i className="icon icon_search"></i>
                        </div>
                        <div className="back_clear"onClick={this.search.bind(this)}>取消</div>
                    </div>
                    <div className="search_list default">

                        <h1 >热门搜索</h1>
                        <div className="listcont">
                            <div className="item">WALTER WALLET</div>
                            <div className="item">厨具用品</div>
                            <div className="item">雪平锅</div>
                            <div className="item">Pot de miel</div>
                            <div className="item">蜂蜜</div>
                            <div className="item">Glaster</div>
                            <div className="item">保鲜盒</div>
                            <div className="item">Myungjin</div>
                            <div className="item">美容彩妆</div>
                            <div className="item">马克杯</div>
                        </div>
                    </div>
                    <div className="login_list">
                        <div className="login">
                            <i className="icon icon_me"></i>
                        </div>
                        <div className="tishiy">点击登录，查看更多历史搜索</div>
                    </div>
                </div>
            </div> */}

            </div>

        )

    }


}



export default Nheader