import { ProxyState } from "../AppState.js";
import { toDoService } from "../Services/ToDoService.js";


function _drawToDo() {
  let template = ''
  ProxyState.ToDoList.forEach(T => template += T.Template)
  document.getElementById('ToDo').innerHTML = template
}
export class ToDoController {
  constructor() {
    ProxyState.on('ToDoList', _drawToDo)
  }

  AddToDo() {
    window.event.preventDefault()
    let forminfo = window.event.target
    let ToDo = { description: forminfo.Description.value }
    toDoService.AddToDo(ToDo)
    forminfo.reset()
  }

  DeleteToDo(id) {
    toDoService.DeleteToDo(id)
  }

  CompleteToDo(id) {
    toDoService.CompleteToDo(id)
  }
  Console() {
    console.log('ToDoController is linked through button')
    toDoService.Console()
  }

  Draw() {
    _drawToDo
  }
}