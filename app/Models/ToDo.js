
export class ToDo {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.completed = data.completed
  }

  get Template() {
    if (this.completed == true) {
      return `    <div class="row">
      <div class="col-1">
      <input type="checkbox" checked name="completed" onclick="app.toDoController.CompleteToDo('${this.id}')"></input>
      </div>
      <div class= "col-8">
  <h5 style="text-decoration:line-through;">${this.description}</h5>
      </div>
      <div class="col-1">
  <button class="btn text-center" onclick="app.toDoController.DeleteToDo('${this.id}')">X</button>
  </div>
  </div>`
    } else {
      return `
      <div class="row">
      <div class="col-1">
      <input type="checkbox" name="completed" onclick="app.toDoController.CompleteToDo('${this.id}')"></input>
      </div>
      <div class= "col-8">
  <h5 >${this.description}</h5>
      </div>
      <div class="col-1">
  <button class="btn text-center" onclick="app.toDoController.DeleteToDo('${this.id}')">X</button>
  </div>
  </div>`
    }
  }

}