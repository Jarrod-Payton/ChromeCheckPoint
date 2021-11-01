import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";

function DrawTime() {
  clockService.GetTime()
  document.getElementById('clock').innerHTML = ProxyState.Time.Template
}

function Clock() {
  let clock = setInterval(DrawTime, 1000)
}

export class ClockController {
  constructor() {
  }

  Update() {
    DrawTime()
    Clock()
  }


}