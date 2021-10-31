import { ImageController } from "./Controllers/ImageController.js";
import { ToDoController } from "./Controllers/ToDoController.js";
import { WeatherController } from "./Controllers/WeatherController.js"

class App {

  imageController = new ImageController()
  toDoController = new ToDoController()
  weatherController = new WeatherController()

}

window["app"] = new App();
