export class Clock {
  constructor(data) {
    this.hours = data.getHours()
    this.minutes = data.getMinutes()
  }
  get Template() {
    return `<h1 class="p-2">${this.HoursLook()}:${this.MinutesLook()}</h1>`
  }
  HoursLook() {
    if (this.hours <= 9) {
      if (this.hours == 0) {
        return `12`
      }
      return `0${this.hours}`
    } else {
      return `${this.hours}`
    }
  }
  MinutesLook() {
    if (this.minutes <= 9) {
      return `0${this.minutes}`
    } else {
      return `${this.minutes}`
    }
  }
}