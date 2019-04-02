import React from 'react';

import Header from '../../components/List/Header'
import Nav from '../../components/List/Nav'
import Sort from '../../components/List/Sort'
import Section from '../../components/List/Section'

import withAxios from '../../hoc/withAxios'

class List extends React.Component {
    constructor(){
        super();
        this.state = {
            goodsList : []
        }
    }

    async componentWillMount(){
        let {axios} = this.props;
        let data = await axios.get('/list');
        this.setState({
            goodsList : data.data.sort((a,b)=>{
                return a.data.goodsId - b.data.goodsId;
            })
        })
    }

    changeSort(type,flag){
        let {goodsList} = this.state;
        switch(type){
            case 'all' :
                this.setState({
                    goodsList : goodsList.sort((a,b)=>{
                        return a.data.goodsId - b.data.goodsId;
                    })
                })
                break;
            case 'sale' :
                this.setState({
                    goodsList : goodsList.sort((a,b)=>{
                        return a.data.likeNum - b.data.likeNum;
                    })
                })
                break;
            case 'time':
                this.setState({
                    goodsList : goodsList.sort((a,b)=>{
                        return a.data.utime - b.data.utime;
                    })
                })
                break;
            case 'price':
                if(flag){
                    console.log(666);
                    this.setState({
                        goodsList : goodsList.sort((a,b)=>{
                            return a.data.price - b.data.price;
                        })
                    })
                }else{
                    this.setState({
                        goodsList : goodsList.sort((a,b)=>{
                            return b.data.price - a.data.price;
                        })
                    })
                }
                break;
        }
    }

    render() {
        let {goodsList} = this.state;
        console.log(goodsList);
        return (
            <div data-v-26de577f className='main'>
                <Header />
                <Nav />
                <Sort changeSort={this.changeSort.bind(this)} />
                <Section goodsList={goodsList} />
            </div>

        )
    }

}

List = withAxios(List);

export default List