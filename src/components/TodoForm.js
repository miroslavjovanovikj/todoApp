import React,{Component} from 'react';
import {connect} from 'react-redux';
import '.././style/css/TodoForm.css';
import *as actions from '../actions/todoActions';

class TodoForm extends Component{
  constructor(props){
    super(props);
    this.state={...this.returnStateObj()}
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
  }
  returnStateObj(){
    if(this.props.currId==='')
      return {
          todoItem:''
      }
      else
        // return this.props.list[this.props.list.currId]
        return this.state
  }
  componentDidUpdate(preevProps){
    if(preevProps.currId!== this.props.currId|| preevProps.list.length!== this.props.list.length)
    this.setState({...this.returnStateObj()})
  }
  handleInputChange(e){
      this.setState({
        currId:Date.now(),
          [e.target.name] :e.target.value,
          complited:false
      })
    // }
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.props.currId===''){
      return  this.props.insertTodo(this.state)
    }else{
      return this.props.updateTodo(this.state)}

  }
  render(){

    return(
      <div className='container'>
        <div className='row'>
        <div className="TodoForm">
          <form  className='TodoFormInput'  onSubmit={this.handleSubmit}>
          <input type="text" name="todoItem" placeholder='Enter Text' value={this.state.todoItem} onChange={this.handleInputChange} />
          <button className='TodoFormButton'type="submit" disabled={this.state.todoItem===''}>
            <i className={this.state.todoItem==='' ?
              'iconEmpty far fa-plus-square' :
              'plusIcon far fa-plus-square'}>
            </i>
          </button>
        </form>
        </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    list:state.list,
    currId:state.currId
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    insertTodo:(data)=>dispatch(actions.insertItem(data)),
    updateTodo:(data)=>dispatch(actions.updateItem(data)),
      updateTodoIndex:(data,id)=>dispatch(actions.updateItem(data,id)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm);
