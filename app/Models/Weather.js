export class Weather {
  constructor(data) {
    this.temperature = data.main.temp
    this.condition = data.weather[0].main
  }
  get Template() {
    return `<div class="row text-center"><h8 class="p-2">Forecast: ${this.condition}</h8>
    <button class="btn-success" onclick="app.weatherController.Toggle()" style="height:30px;">Switch Degrees</button></div>`
  }
}