import { CHANGE_INPUT_VALUE,ADD_LIST,DELETE_LIST } from './ActionTypes'
export const getAddListAction = (value)=>{
  const action = {
    type:ADD_LIST,
  }
  return action
}

export const getDeleteListAction = (value)=>{
  const action = {
    type:DELETE_LIST,
    value
  }
  return action
}

export const getChangeListAction = (value)=>{
  const action = {
    type:CHANGE_INPUT_VALUE,
    value
  }
  return action
}