import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { sandboxApi } from "./Axios.js"

class ImageService {
  async Load() {
    const res = await sandboxApi.get('images')
    const image = new Image(res.data)
    ProxyState.ActiveImage = image
  }
}

export const imageService = new ImageService()