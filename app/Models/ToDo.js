
export class ToDo {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.completed = data.completed
  }
  get Template() {
    return `
<h1>${this.description}</h1>
<h1>${this.completed}</h1>
`
  }
}