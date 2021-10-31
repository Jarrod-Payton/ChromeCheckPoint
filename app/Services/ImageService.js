import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";

class ImageService {
  constructor() {
    console.log('Service Connected')
  }
}

export const imageService = new ImageService()