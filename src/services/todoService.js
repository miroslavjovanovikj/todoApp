export class TodoService{
  static async getAll(){
    return JSON.Parse(localStorage.getItem('todo',JSON.stringify(list));
  }

  static async updateItem(data,id){
    return  JSON.Parse(localStorage.getItem('todo',JSON.stringify(list)))
  }
  static async deleteItem(id){
    return  JSON.Parse(localStorage.getItem('todo',JSON.stringify(list)))
  }
}
