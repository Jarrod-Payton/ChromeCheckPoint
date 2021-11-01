import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js"

function TempMath() {
  let temperature = ProxyState.ActiveWeather.temperature
  if (ProxyState.Switch == false) {
    let FahrenheitTemp = Math.floor((temperature - 273.15) * 9 / 5 + 32)
    console.log(FahrenheitTemp)
    return `<div class="row"><h8 class="text-center">Temperature in Fahrenheit: ${FahrenheitTemp} degrees </h8></div>`
  } else {
    let CelsiusTemp = Math.floor(temperature - 273.15)
    return `<div class="row"><h8 class="text-center">Temperature in Ceslsius: ${CelsiusTemp} degrees </h8></div>`
  }
}

function _weatherUpdate() {
  let template = ''
  template += TempMath()
  template += ProxyState.ActiveWeather.Template
  document.getElementById('weather').innerHTML = template
}

export class WeatherController {
  constructor() {
    ProxyState.on('ActiveWeather', _weatherUpdate)
    ProxyState.on('Switch', _weatherUpdate)
  }
  Update() {
    console.log('weather')
    _weatherUpdate()
  }

  Toggle() {
    ProxyState.Switch = !ProxyState.Switch
  }
}