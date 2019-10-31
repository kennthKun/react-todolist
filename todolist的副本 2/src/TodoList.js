import React,{Component} from 'react';
// import axios from 'axios'
import store from './store'
import {getInitlist,getInputChangeAciton,getAddListAciton,getDeleteList} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
    this.state = store.getState()//获取store state
    store.subscribe(this.handleStoreChange)//store发送变化时
  }
  render(){
    return (
      <TodoListUI 
        inputValue ={this.state.inputValue}
        list = {this.state.list}
        handleInputChange = {this.handleInputChange}
        handleBtnClik= {this.handleBtnClik}
        handleDelete = {this.handleDelete}
      />
    )
  }
  componentDidMount(){
    const action = getInitlist();
    store.dispatch(action)
    // console.log(action)
    // axios.get('/list.json')
    // .then((res) => {
    //     const data = res.data;
    //     const action = initListAciton(data)
    //     store.dispatch(action)
    // })
  }

  handleDelete(index){
    console.log(index)
    const action = getDeleteList(index)
    store.dispatch(action)
  }
  handleInputChange = (e)=>{
    const action = getInputChangeAciton(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange=()=>{
    this.setState(store.getState())
  }
  handleBtnClik = ()=>{
    const action = getAddListAciton()
    store.dispatch(action)
  }
}

export default TodoList