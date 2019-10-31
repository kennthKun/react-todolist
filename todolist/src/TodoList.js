import React from 'react'
// import store from './store'
import {connect} from 'react-redux'
import {getAddListAction,getDeleteListAction,getChangeListAction} from './store/actionCreators'

const TodoList = (props)=>{
  const {inputValue,handleInputChange,handleClick,handledelete,list} = props
  return(
    <div>
      <div>
        <input onChange={handleInputChange} value={inputValue} type="text"/>
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
       {
           list.map((item,index)=>{
              return (
                <li onClick={()=>handledelete(index)} key={index}>{item}</li>
              )
           })
        }
      </ul>
    </div>
  )
}
//把store里的数据映射到组件的props里
const MapStateToProps = (state)=>{
  return{
    inputValue:state.inputValue,
    list:state.list
  }
}
// 把store.dispatch 挂载到 Props
const MapDispatchToProps = (dispatch)=>{
  return{
    handleInputChange(e){
      const action =getChangeListAction(e.target.value)
      dispatch(action) 
    },
    handleClick(){
      const action = getAddListAction()
      dispatch(action) 
    },
    handledelete(index){
      const action = getDeleteListAction(index)
      dispatch(action) 
    }
  }
}

export default connect(MapStateToProps,MapDispatchToProps)(TodoList)
