import React,{Component} from 'react';
import TodoForm from './TodoForm';
import {connect} from 'react-redux';
import '.././style/css/TodoList.css';
import FlipMove from 'react-flip-move';
import * as actions from '../actions/todoActions'


class TodoList extends Component{

  constructor(props){

    super(props)
    this.state={
      todoItem:'', currId:'', complited:false,myname:''
    }

  }
  handleInput(e){

  }
    handleDone(id){
      this.props.toggleItem(id)

    }

    handleEdit(data,id,e){


      this.props.updateTodoIndex(data,id,e)
    }

    handleDelete(id){
      this.props.deleteTodo(id)
    }

  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className="col-md-4"></div>
          <div className="Todo col-md-4 ">
            <TodoForm />
             <div className='TodoList '>

               {this.props.list.map((todo)=>(
                 <div className="TodoListItem"  key={todo.currId}>
                     <form onSubmit={this.handleEdit}>
                     <p className='TodoItems col-md-10 col-xs-10'>
                        <input className="editTodo" type="text" value={todo.todoItem} name="todoItem"
                          onChange={(e)=>this.handleEdit(e.target.value, todo.currId)}
                        />
                      </p>
                      <div>

                          <i         onClick={()=>this.handleDone(todo.currId)}
                                  className={todo.complited===false ?
                                    'TodoToggleButton  col-md-1 col-xs-1 fas fa-check-circle':
                                    ' TodoToggleButton1 col-md-1 col-xs-1 fas fa-check-circle'}></i>
                      </div>
                     <div className='TodoButtons col-md-1 col-xs-1'>
                        <button className='DeleteButton' onClick={()=>this.handleDelete(todo.currId)}><i className=" fas fa-trash"></i></button>
                     </div>
                     </form>
                 </div>
               ))}
             </div>
            </div>
              <div className="col-md-4"></div>
          </div>
        </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    list:state.list
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    deleteTodo:(id)=>dispatch(actions.deleteItem(id)),
    updateTodoIndex:(data,id)=>dispatch(actions.updateItem(data,id)),
    toggleItem:(id)=>dispatch(actions.toogleComplited(id)),
    handleInsert:(id)=>dispatch(actions.insertItem(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
              // <FlipMove duration={300} easing='ease-in-out'>
                        // </FlipMove>
// <input type="text" name="myname" value={this.state.myname} onChange={this.handleInput} />
