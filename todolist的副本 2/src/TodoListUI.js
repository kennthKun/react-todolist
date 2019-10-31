import React from 'react';
import { Input,Button,List } from 'antd';
import 'antd/dist/antd.css';
// 无状态组件 当一个普通组件只有render时可以用无状态  无状态组件性能高
const TodoListUi = (props)=>{
  return(
    <div style={{padding:'10px'}}>
        <div>Hello world</div> 
        <Input 
        onChange = {props.handleInputChange}
        value={props.inputValue} placeholder="todo info" style={{width:'300px',marginRight:'10px'}} />
        <Button onClick={props.handleBtnClik} type="primary">提交</Button>

        <List
          style={{marginTop:'10px',width:'300px'}}
          bordered
          dataSource={props.list}
          renderItem={(item,index)=>(<List.Item 
            onClick={()=>{props.handleDelete(index)}}
          >{item}</List.Item>)}
        />
      </div>
  )
}
// class TodoListUi extends Component{

//   render() {
//     return(
//       <div style={{padding:'10px'}}>
//         <div>Hello world</div> 
//         <Input 
//         onChange = {this.props.handleInputChange}
//         value={this.props.inputValue} placeholder="todo info" style={{width:'300px',marginRight:'10px'}} />
//         <Button onClick={this.props.handleBtnClik} type="primary">提交</Button>

//         <List
//           style={{marginTop:'10px',width:'300px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item,index)=>(<List.Item 
//             onClick={(index)=>{this.props.handleDelete(index)}}
//           >{index}{item}</List.Item>)}
//         />
//       </div>
//     )
//   }
// }

export default TodoListUi