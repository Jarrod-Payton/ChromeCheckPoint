import { ProxyState } from "../AppState.js"
import { quoteService } from "../Services/QuoteService.js"

function _draw() {
  let template = ''
  template += ProxyState.Quote.Template
  document.getElementById('quote').innerHTML = template
}

export class QuoteController {
  constructor() {
    ProxyState.on('Quote', _draw)
    quoteService.Grab()
  }

  Update() {
    _draw()
  }
}