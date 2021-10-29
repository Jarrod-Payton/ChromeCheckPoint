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
      console.log(res.data)
      ProxyState.ToDoList = res.data.map(p => new ToDo(p))
      console.log(ProxyState.ToDoList)

    } catch (error) {
      console.error(error)
    }
  }
  async Console() {
    try {
      const rez = await sandboxApi.get('Lucas/todos')
      console.log(rez)
    } catch (error) {
      console.error(error)
    }
  }
}
export const toDoService = new ToDoService()