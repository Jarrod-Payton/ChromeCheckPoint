import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js"

function _RenderPage() {
  let template = `<div class="row p-2">
  <div class="col-3">
    <div class="card p-3">
      <div class="card-text" id="weather">
      </div>
    </div>
  </div>
  <div class="col-7"></div>
  <div class="col-2">
    <div class="card">
      <div class="card-text p-3">
        <h5 class="text-center">Your To Do's</h5>
        <div id="ToDo"></div>
        <form onsubmit="app.toDoController.AddToDo()">
          <input type="text" class="" name="Description" placeholder="Add a To Do...."
            aria-describedby="Add a To Do" required>
          <button class="btn">Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>`

  document.getElementById('img').innerHTML = template
}
export class ImageController {
  constructor() {
    _RenderPage()
    console.log('Controller Connected')
  }
}