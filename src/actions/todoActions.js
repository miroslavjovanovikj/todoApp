export const insertItem =(data)=>{
  return{
    type:"INSERT",
    payload:data
  }
}
// export const updateItem=(id,data)=>{
//   return{
//     type:"UPDATE",
//     data,
//     id
//   }
// }
export const updateItem=(data,id)=>{
  return{
    type:"UPDATE",
    data,
    id
  }
}
export const deleteItem=(id)=>{
  return{
    type:"DELETE",
    payload:id
  }
}

// export const updateIndex=(data)=>{
//   return{
//     type:"UPDATE-INDEX",
//     payload:data
//   }
// }
export const toogleComplited =(id)=>{
  return{

    type:"TOGGLE",
    payload:id
  }
}
