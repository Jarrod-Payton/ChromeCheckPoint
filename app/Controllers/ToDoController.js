import { ProxyState } from "../AppState.js";
import { toDoService } from "../Services/ToDoService.js";


function _drawToDo() {
  let template = ''
  ProxyState.ToDoList.forEach(T => template += `<h1>${this.description}</h1>
    <h1>${this.completed}</h1>`)
  document.getElementById('ToDo').innerHTML = template
}
export class ToDoController {
  constructor() {
    ProxyState.on('ToDoList', _drawToDo)
  }

  Console() {
    console.log('ToDoController is linked through button')
    toDoService.Console()
  }
}