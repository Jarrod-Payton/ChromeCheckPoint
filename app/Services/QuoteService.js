import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { sandboxApi } from "./Axios.js";

class QuoteService {

  async Grab() {
    const res = await sandboxApi.get('quotes')
    const quote = new Quote(res.data)
    ProxyState.Quote = quote
  }
}

export const quoteService = new QuoteService()