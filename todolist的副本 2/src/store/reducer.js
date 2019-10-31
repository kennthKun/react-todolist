import { CHANG_INPUT_VALUE, DELETE_LIST, ADD_LIST, INIT_LIST } from './ActionTypes';
const defaultState = {
        inputValue: '',
        list: []
    }
    // reducer 必须是（纯函数） ，给固定的输入就会有固定的输出，并且没有副作用
export default (state = defaultState, action) => {
    if (action.type === CHANG_INPUT_VALUE) {
        // reducer可以接收state,但是绝不能修改state
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }
    if (action.type === INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        console.log(action.value)
        newState.list = action.value
        return newState
    }
    return state;
}