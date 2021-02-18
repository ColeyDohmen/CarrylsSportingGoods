import ValuesController from "./Controllers/ValuesController.js";
import CarrylsController from "./Controllers/CarrylsController.js";

class App {
  // valuesController = new ValuesController();
  carrylsController = new CarrylsController();

}

window["app"] = new App();
