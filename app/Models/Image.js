export class Image {
  constructor(data) {
    this.url = data.largeImgUrl
  }
  get Template() {
    return `background-image: url('${this.url}'); background-repeat: no-repeat; background-size:100% 100%; backgroud-attachment: fixed; height: 100vh`
  }
}