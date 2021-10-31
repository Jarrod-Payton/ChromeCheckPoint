import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js"
import { sandboxApi } from "./Axios.js";

class WeatherService {
  constructor() {
    this.Update()
  }
  async Console() {
    const res = await sandboxApi.get('weather')
    console.log(res.data)
  }
  async Update() {
    const res = await sandboxApi.get('weather')
    const TodaysWeather = new Weather(res.data)
    ProxyState.ActiveWeather = TodaysWeather
    console.log(ProxyState.ActiveWeather)
  }
  Toggle() {
    console.log('Howdy')
  }
}

export const weatherService = new WeatherService()