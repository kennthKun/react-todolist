import { CHANGE_INPUT_VALUE, ADD_LIST, DELETE_LIST } from './ActionTypes';

const defaultState = {
    inputValue: 'hello world',
    list: [1, 2, 3, 4]
}

export default (state = defaultState, action) => {
    console.log(action)
    if (action.type === CHANGE_INPUT_VALUE) {
        const NewState = JSON.parse(JSON.stringify(state))
        NewState.inputValue = action.value;
        return NewState;
    }
    if (action.type === ADD_LIST) {
        const NewState = JSON.parse(JSON.stringify(state))
        NewState.list.push(NewState.inputValue)
        return NewState;
    }
    if (action.type === DELETE_LIST) {
        const NewState = JSON.parse(JSON.stringify(state))
        NewState.list.splice(action.value, 1)
        return NewState;
    }
    return state;
}