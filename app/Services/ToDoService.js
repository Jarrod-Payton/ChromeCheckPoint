import { ToDo } from "..//Models/ToDo.js"
import { sandboxApi } from "./Axios.js"
import { ProxyState } from "../AppState.js"

class ToDoService {
  constructor() {
    this.SyncLists()
  }

  async SyncLists() {
    try {
      const res = await sandboxApi.get('Lucas/todos')
      ProxyState.ToDoList = res.data.map(p => new ToDo(p))

    } catch (error) {
      console.error(error)
    }
  }

  async AddToDo(description) {
    console.log(description)
    const res = await sandboxApi.post('Lucas/todos', description)
    const NewToDo = new ToDo(res.data)
    ProxyState.ToDoList = [...ProxyState.ToDoList, NewToDo]
    console.log(NewToDo)
    console.log(ProxyState.ToDoList)
  }

  async DeleteToDo(id) {
    if (window.confirm('Are You Sure About That')) {
      await sandboxApi.delete('Lucas/todos/' + id)
      ProxyState.ToDoList = ProxyState.ToDoList.filter(ToDo => ToDo.id != id)
    }
  }

  async CompleteToDo(id) {
    const ToDo = ProxyState.ToDoList.find(t => t.id == id)
    ToDo.completed = !ToDo.completed
    const res = await sandboxApi.put('Lucas/todos/' + ToDo.id, ToDo)
    ProxyState.ToDoList = ProxyState.ToDoList
    console.log(ProxyState.ToDoList)
  }
}

export const toDoService = new ToDoService()