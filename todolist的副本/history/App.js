import React, {Component,Fragment} from 'react'
import { CSSTransition,TransitionGroup, } from 'react-transition-group';

import './style.css'
class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      list:[]
    }
  }
  handleAddItem = ()=>{
      this.setState((prevState)=>({
        list : [...prevState.list,'item']
      }))
  }
  render() {
    return(
      <Fragment>
        <TransitionGroup>
        {
          this.state.list.map((item,index)=>{
              return(
                <CSSTransition
                  key={index}
                  appear = {true}
                  timeout ={1000}
                  unmountOnExit
                  classNames='fade'
                  onEntered={(el)=>{el.style.color = 'blue'}}
                >
                  <div>{item}</div>
                </CSSTransition>
                
              )
          })
        }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
     
    )
  }
}
export default App;