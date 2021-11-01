export class Quote {
  constructor(data) {
    this.quote = data.content
    this.author = data.author
  }
  get Template() {
    return `<div class="hovering"><h8 class="text-center p-3">"${this.quote}"</h8></div>
    <div class="unhiddening"><h9 class="text-center p-2">By: ${this.author}</h9></div>`
  }
}