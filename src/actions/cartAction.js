/**
 * Action creator
 */

//  编写常量，用于规范type
export const UPDATE_TOTAL = 'UPDATE_TOTAL'
export const INIT_CART = 'INIT_CART'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CHANGE_QTY = 'CHANGE_QTY'
export const CLEAR_CART = 'CLEAR_CART'

//更新总计
export function update_total(total){
    return {
        type:UPDATE_TOTAL,
        payload:{total}
    }
}
//初始化购物车
export function init(goods){
    return {
        type:INIT_CART,
        payload:goods
    }
}

export function add(goods){
    return {
        type:ADD_TO_CART,
        payload:goods
    }
}

export function removeGoods(username,goodsId){
    console.log('cartAction ', username,goodsId);
    return {
        type:"DELETE_FROM_CART_ASYNC",
        payload:{username,goodsId}
    }
}

export function changeqty(id,qty){
    return {
        type:CHANGE_QTY,
        payload:{id,qty}
    }
}

export function clear(){
    return {
        type:CLEAR_CART
    }
}


export default {
    init,
    add,
    removeGoods,
    changeqty,
    clear,
    update_total
}