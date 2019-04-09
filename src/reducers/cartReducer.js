/**
 * Cart Reducer
 * 关于购物车的规则
 */

import {UPDATE_TOTAL,INIT_CART,ADD_TO_CART,REMOVE_FROM_CART,CHANGE_QTY,CLEAR_CART} from '../actions/cartAction'


// state的修改逻辑
let reducer = (state={total:0},{type,payload})=>{
    // state: 上一次的状态
    // action: 修改指令
    // 返回值：返回新的state
    switch(type){

        // 初始化购物车
        case INIT_CART:
            return {
                ...state,
                goodslist:payload
            }

        //更新总计
        case UPDATE_TOTAL:
            return {
                ...state,
                total:payload.total
            }

        // 添加商品到购物车
        case ADD_TO_CART:
            return {
                ...state,
                goodslist:[...state.goodslist,payload]
            }

        // 删除购物车商品
        case REMOVE_FROM_CART:
            return {
                ...state,
                goodslist:state.goodslist.filter(item=>item.data.goodsId!=payload.gid)
            }
        
        // 修改购物车商品数量
        case CHANGE_QTY:
            return {
                ...state,
                goodslist:state.goodslist.map(goods=>{
                    if(goods.goods_id === payload.id){
                        goods.qty = payload.qty
                    }
                    return goods;
                })
            }
        
            // 清空购物车
        case CLEAR_CART:
            return {
                ...state,
                goodslist:[]
            }

        default:
            return state;
    }
}

export default reducer;