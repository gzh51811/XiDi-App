import React, { Component } from 'react';
import withAxios from '../../hoc/withAxios';
import { withRouter } from 'react-router';
import { IP } from '../../config/config';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: '',
            defaultlist: [],
            searchlist: [],
            length: 10
        };
    }


    componentWillMount() {
        this.props.axios.get(IP + '/search?keyword=').then((res) => {
            this.setState({
                defaultlist: res.data,
                searchlist: [],
            })
        })
    }

    // 定时器
    timers = null

    onInput(e) {

        this.setState({
            val: e.target.value
        })

        clearTimeout(this.timers);
        var newProp = this.props;

        this.timers = setTimeout(function () {

            // IP引入
            newProp.axios.get(IP + '/search?keyword=' + this.state.val)
                .then((res) => {
                    let initData = res.data;
                    if (initData.length == 10) {
                        this.setState({
                            defaultlist: initData,
                            searchlist: [],
                            length: 10
                        })
                    } else {
                        this.setState({
                            defaultlist: [],
                            searchlist: initData,
                            length: 0
                        })
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        }.bind(this), 200);
    }

    backOrigin() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>

                <div data-v-1c2ed110="" data-v-1ea4c83e="" className="search_cont wrapper" style={{ "top": "0" }}>
                    <div data-v-1c2ed110="" className="search_heard">
                        <div data-v-1c2ed110="" className="search_text">
                            <input data-v-1c2ed110="" id="search_key" maxLength="130" name="search_key" type="text" className="search_key"
                                placeholder="逛世界，去喜地" onChange={this.onInput.bind(this)} />
                            <i data-v-1c2ed110="" className="icon icon_unfinished" style={{ display: "none" }}></i>
                            <i data-v-1c2ed110="" className="icon icon_search"></i>
                        </div>
                        <div data-v-1c2ed110="" className="back_clear" onClick={this.backOrigin.bind(this)}>取消</div>
                    </div>


                    {
                        this.state.length == 10 ?
                            (
                                <div data-v-1c2ed110="" className="search_list default">
                                    <h1 data-v-1c2ed110="">热门搜索</h1>
                                    <div data-v-1c2ed110="" className="listcont">
                                        {
                                            this.state.defaultlist.map((item, key) => {
                                                return <div key={key} data-v-1c2ed110="" className="item">{item}</div>
                                            })
                                        }
                                    </div>
                                </div>
                            ) :
                            (
                                <div data-v-1c2ed110="" className="search_list" style={{ paddingRight: '0' }}>
                                    {
                                        this.state.searchlist.map(item => {
                                            return (
                                                <div data-v-1c2ed110="" className="suggest" key={item.name} style={{ height: '3.5rem', lineHeight: '2,5rem' }}>
                                                    <div data-v-1c2ed110="" className="suggest_bor">{item.name}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                    }




                    <div data-v-1c2ed110="" className="login_list">
                        <div data-v-1c2ed110="" className="login"><i data-v-1c2ed110="" className="icon icon_me"></i>
                        </div>
                        <div data-v-1c2ed110="" className="tishiy">点击登录，查看更多历史搜索</div>
                    </div>
                </div>
            </div>

        )
    }

}

Search = withAxios(Search);
Search = withRouter(Search);

export default Search;



