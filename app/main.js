import { ImageController } from "./Controllers/ImageController.js";
import { ToDoController } from "./Controllers/ToDoController.js";
import { WeatherController } from "./Controllers/WeatherController.js"
import { QuoteController } from "./Controllers/QuoteController.js";
import { ClockController } from "./Controllers/ClockController.js";

class App {

  clockController = new ClockController()
  quoteController = new QuoteController()
  imageController = new ImageController()
  toDoController = new ToDoController()
  weatherController = new WeatherController()

}

window["app"] = new App();
