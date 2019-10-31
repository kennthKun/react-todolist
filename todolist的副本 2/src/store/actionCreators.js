import { GET_INIT_LIST, CHANG_INPUT_VALUE, DELETE_LIST, ADD_LIST, INIT_LIST } from './ActionTypes';
// import axios from 'axios';
export const getInputChangeAciton = (value) => ({
    type: CHANG_INPUT_VALUE, //描述
    value
})

export const getAddListAciton = () => ({
    type: ADD_LIST, //描述
})

export const getDeleteList = (value) => ({
    type: DELETE_LIST, //描述
    value
})

export const initListAciton = (value) => ({
    type: INIT_LIST, //描述
    value
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/list.json')
            .then((res) => {
                const data = res.data;
                const action = initListAciton(data)
                dispatch(action)
            })
    }
}


export const getInitlist = () => ({
    type: GET_INIT_LIST
})