import React from 'react';

class Ncategory extends React.Component {
    constructor() {
        super();
        this.state = {
            category: [
                {
                    name: "16国特品精选"
                },
                {
                    name: "德国精选"
                }, {
                    name: "日本精选"
                },
                {
                    name: "韩国精选"
                },
                {
                    name: "英国精选"
                },
                {
                    name: "意大利精选"
                },
                {
                    name: "法国精选"
                },
                {
                    name: "西班牙精选"
                },
                {
                    name: "希腊精选"
                },
                {
                    name: "澳大利亚精选"
                },
                {
                    name: "新西兰精选"
                },
                {
                    name: "瑞典精选"
                },
                {
                    name: "丹麦精选"
                },
                {
                    name: "比利时精选"
                },
                {
                    name: "美国精选"
                },
                {
                    name: "奥地利精选"
                },
                {
                    name: "巴西精选"
                },
                {
                    name: "瑞士精选"
                }
            ],
                on:false
        }
    }
    show(){
        // console.log(this.state);
        
        this.setState({  
            on : !this.state.on 
          
        })
    }
  


    render() {
        let { category } = this.state
        return (
            <div className="country_nav_position">
                <div className="country_nav">
                    <div className="country_nav_one">
                        <ul data-num="0" style={{ transform: 'translateX(0px)', transition: 'all 300ms ease 0s' }} >
                            {
                                category.map(item => <li className={item.name =="16国特品精选"?"on":null} key={item.name}>{item.name}</li>)
                            }
                        </ul>
                    </div>
                    <div className={["jiantou",this.state.on == true? "on":null].join(" ")}>
                        <div className="oall">全部</div>
                        <i className="icon icon_triangle_down" onClick={this.show.bind(this)}></i>
                    </div>
                    <div className={["country_nav_two",this.state.on==true? "on":null].join(" ")}>
                        <ul>
                            {
                                category.map(item => <li className="" key={item.name}>{item.name}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )


    }


}

export default Ncategory