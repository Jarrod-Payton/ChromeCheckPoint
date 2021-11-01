export class Image {
  constructor(data) {
    this.url = data.largeImgUrl
  }
  get Template() {
    return `<div class="row p-2" style="background-image: url('${this.url}'); background-repeat: no-repeat; background-size:100% 100%; backgroud-attachment: fixed; height: 100vh">
    <div class="col-3">
      <div class="card p-3">
        <div class="card-text" id="weather" onload="app.weatherController.Update()">
        <button class="btn text-center" onclick="app.weatherController.Update()">Update</button>
        </div>
      </div>
    </div>
    <div class="col-7">
      <div clas="row container-fluid">
        <div class="card">
          <div class="card-text text-center p-3" id="quote">
          <button class="btn" onclick="app.quoteController.Update()">hi</button>
          </div>
        </div>
      </div>
      <div class="row container-fluid">
        <div class="col-4"></div>
        <div class="col-4 mt-5">
          <div class="mt-5">
            <div class="card mt-5">
              <div class="card-text text-center" id="clock">
                <button onclick="app.clockController.Update()">Update</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
    <div class="col-2">
      <div class="card">
        <div class="card-text p-3">
          <h5 class="text-center" onload="app.toDoController.Draw()">Your To Do's</h5>
          <div id="ToDo"></div>
          <form onsubmit="app.toDoController.AddToDo()">
            <input type="text" class="" name="Description" placeholder="Add a To Do...."
              aria-describedby="Add a To Do" required>
            <button class="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>`}
}