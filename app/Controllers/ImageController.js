import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js"

function _RenderPage() {
  let template = ''
  template += ProxyState.ActiveImage.Template
  let image = document.getElementById('img')
  image.style = template
}
export class ImageController {
  constructor() {
    ProxyState.on('ActiveImage', _RenderPage)
    imageService.Load()
  }

  Update() {
    imageService.Load()
    _RenderPage()
  }
}