import React from 'react';

import {Route, Switch, Redirect, withRouter} from 'react-router-dom';

import Header from '../../components/Category/Header'

class Category extends React.Component {
    render() {
        return (
            <div className='main'>
                <Header />
            </div>

        )
    }

}

export default Category