import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem'
import axios from 'axios'

import './style.css'

// Fragment 占位符
class TodoList extends Component {
  constructor(props){
    super(props);
    // 当组件的state或者props发生改变的时候 render函数就会重新执行
    this.state = {
      inputValue:'',
      list:[],
    }
  }
  handleChange = (e)=>{
    // 异步的setState
    const value = e.target.value
    this.setState(()=>({
        inputValue : value
    }))
  }
  Submit = ()=>{
    // setState 提供了回掉函数
    this.setState((prevState)=>({
      // prevState 修改数据之前的数据 等价于 this.state
      list:[...prevState.list,prevState.inputValue],
      inputValue:''
    }))
    
  }
  dell =(index)=>{
    // immutable
    this.setState((prevState)=>{
      const list = [...prevState.list];
      list.splice(index,1)
      return {list}
    })
  }
  render() {
    console.log('render')
      return (
        <Fragment>
          <div>
            <label htmlFor="insetArea">输入内容</label>
            <input 
              id='insetArea'
              className='input' 
              value={this.state.inputValue} 
              onChange={this.handleChange} 
              type="text"
            />
            <button onClick={this.Submit}>提交</button> </div>
          <ul>
           {this.getTodoItem()}
          </ul>
        </Fragment>
      )
  }
  componentDidMount(){
    axios.get('/api/todolist')
    .then(()=>{

    })
    .catch(()=>{
      alert('error')
    })
  }

  getTodoItem(){
    /* 父传子 用属性 */
    return this.state.list.map((item,index)=>{
      return (
        <TodoItem 
          key={index}
          deleteitem={this.dell} 
          item={item} 
          index={index}
        ></TodoItem>
      )})
  }
 
  
}

export default TodoList;