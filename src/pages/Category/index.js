import React from 'react';

import {Route, Switch, Redirect, withRouter} from 'react-router-dom';

import Header from '../../components/Category/Header'
import Left from '../../components/Category/Left'
import Right from '../../components/Category/right'

import withAxios from '../../hoc/withAxios'

class Category extends React.Component {
    constructor(){
        super();
        this.state = {
            navList : [],
            cur : 0
        }
    }

    async componentWillMount(){
        let {axios} = this.props;
        let data = await axios.get('/category');
        this.setState({
            navList : data.data[0].data.cats
        })
    }

    changeCur(idx){
        this.setState({
            cur : idx
        })
    }

    render() {
        let {navList,cur} = this.state;
        return (
            <div className='main'>
                <Header />
                <section data-v-4d4f9a2d className='contentbox'>
                    <Left navList={navList} changeCur={this.changeCur.bind(this)} cur={cur} />
                    <Right navList={navList} cur={cur} />
                </section>
            </div>

        )
    }

}

Category = withAxios(Category);

export default Category