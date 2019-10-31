import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem'


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
    const value = this.input.value
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
    }),()=>{
      console.log(this.ul.querySelectorAll('div').length)
    })
    
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
              ref={(input)=>{this.input = input}}
              id='insetArea'
              className='input' 
              value={this.state.inputValue} 
              onChange={this.handleChange} 
              type="text"
            />
            <button onClick={this.Submit}>提交</button> </div>
          <ul ref={(ul)=>{this.ul = ul}}>
           {this.getTodoItem()}
          </ul>
        </Fragment>
      )
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
  componentWillMount(){
    // 组件即将被挂载到页面的时候执行
    console.log('componentWillMount')
  }
  componentDidMount(){
    // 组件被挂载到页面之后的时候执行
    console.log('componentDidMount')
  }
  
  shouldComponentUpdate(){
    // 组件被更新之前会被执行
    console.log('shouldComponentUpdate')
    return true;
  }
  componentWillUpdate(){
    // 组件被更新之前会执行 但是在shouldComponentUpdate之后，如果shouldComponentUpdate 返回 flase 则不执行
    console.log('componentWillUpdate')
  }
  componentDidUpdate(){
    // 组件更新之后会执行
    console.log('componentDidUpdate')
  }
}

export default TodoList;