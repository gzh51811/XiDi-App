import { call, put, takeEvery, takeLatest, select, all } from 'redux-saga/effects';

import { getData } from '../service';

import {IP} from '../config/config';

let delay = (time) => new Promise(resolve => setTimeout(resolve, time));

//初始化购物车
function* initCart(action) {
    console.log('初始化购物车');

    try {
        let result = yield call(getData, IP + '/cart/init',{username : action.payload.username});

        yield console.log(result.data);
        
        yield put({type : 'INIT_CART',payload : result.data})

    } catch (error) {
        yield put({ type: 'ADD_TO_CART_FAIL' })
    }

    // 获取state
    let state = select();//等效于store.getState()

    console.log('初始化成功！')
}

//删除数据
function* deleteFromCart(action) {
    let {username,goodsId} = action.payload;
    try {
        let result = yield call(getData, IP + '/cart/deleteItem',{
            username ,
            goodsId
        });

        yield console.log(result);
        
        yield put({type : 'REMOVE_FROM_CART',payload : {goodsId}});

    } catch (error) {
        yield put({ type: 'ADD_TO_CART_FAIL' })
    }

    // 获取state
    let state = select();//等效于store.getState()

    console.log('删除购物车信息')

}


function* addToCar(action) {
    console.log('添加购物车');
    let {username,goodsInfo} = action.payload;
    try {
        let goods = yield call(getData, IP + '/addToCart', {username, goodsInfo});//getData('/api/cart',{page:1,qty:10})
        yield put({ type: 'ADD_TO_CART', payload: goods });//等效小dispatch({type})
    } catch (err) {
        yield put({ type: 'ADD_TO_CART_FAIL' })
    }

    // 获取state
    let state = select();//等效于store.getState()

    console.log('添加成功')
}



// 监听action

function* watchDeleteFromCart(){
    yield takeLatest('DELETE_FROM_CART_ASYNC',deleteFromCart);
}

function* watchInitCart(){
    yield takeLatest('INIT_CART_ASYNC',initCart);
}

function* watchAddToCar() {
    yield takeLatest('ADD_TO_CART_ASYNC', addToCar);
}

function* watchGetData() {
    yield takeLatest('ADD_TO_CART_A', addToCar);
}


export default function* rootSaga() {
    yield all([watchDeleteFromCart(),watchInitCart(),watchAddToCar(), watchGetData()])
}