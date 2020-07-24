if(localStorage.getItem('todos')==null)
  localStorage.setItem('todos',JSON.stringify([]))
let initialState={
  currId:'',
  list:JSON.parse(localStorage.getItem('todos'))
}

export const todoReducer =  (state=initialState, action)=>{
 let list = JSON.parse(localStorage.getItem('todos'))
  switch(action.type){
    case "INSERT":
    state={
      ...state,
      list:[...state.list, action.payload]
    }
    list=[...list, action.payload]
    localStorage.setItem('todos',JSON.stringify(list))
    return state

    case "UPDATE":
    list.map(item=>{
        if(item.currId===action.id){
           item.todoItem =action.data
           localStorage.setItem('todos',JSON.stringify(list))
                return {...state,[item.todoItem]:list}
        }

     })

    case "DELETE":
      list = list.filter(item=>(
        item.currId!==action.payload
      ))
      console.log(list)
      localStorage.setItem('todos',JSON.stringify(list))
      return{list, currId:''}


    case 'TOGGLE':
      let isComplited =list.find(item=>(item.currId===action.payload))
        if(!isComplited.complited){
          isComplited.complited=true
          localStorage.setItem('todos',JSON.stringify(list))
          return {...state,list}
        }else{
          isComplited.complited=false
          localStorage.setItem('todos',JSON.stringify(list))
          return {...state,list}
        }
    default:
      return state
  }
}
