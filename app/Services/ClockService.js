import { ProxyState } from "../AppState.js";
import { Clock } from "../Models/Clock.js";

class ClockService {
  GetTime() {
    let date = new Date()
    const Data = new Clock(date)
    ProxyState.Time = Data
  }
}

export const clockService = new ClockService()