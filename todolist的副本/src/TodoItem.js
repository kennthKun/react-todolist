import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    render() {
      console.log('child render')
      const {item} = this.props;
      // jsx -> js对象 -> 真实的DOM
      return (
        <div onClick={this.handleClick}> {item} </div>
      )
    }
    handleClick = ()=>{
      const {deleteitem,index} = this.props
      deleteitem(index)
    }

    shouldComponentUpdate(nextProps,nextState){
      if(nextProps.content !== this.props.content){
        return true
      }else{
        return false
      }
      
    }
   
}
// 定义传值类型
TodoItem.propTypes ={
  item:PropTypes.string,
  deleteitem:PropTypes.func,
  index:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
  test:PropTypes.string.isRequired
}
// 定义默认值
TodoItem.defaultProps ={
  test:'hello world'
}

export default TodoItem