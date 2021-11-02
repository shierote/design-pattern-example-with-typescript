import { Builder } from './builder'

export class HTMLBuilder implements Builder {
  private buffer: string = ''
  makeTitle(title: string) {
    this.buffer += `
    <html>
      <head>
        <title>
          ${title}
        </title>
      </head>
      <body>
        <h1>
          ${title}
        </h1>
    `
  }
  makeString(str: string) {
    this.buffer += `
        <p>${str}</p>
    `
  }
  makeItems(items: string[]) {
    this.buffer += `
        <ul>`
    items.forEach((item) => {
      this.buffer += `
          <li>
            ${item}
          </li>`
    })
    this.buffer += `
        </ul>
    `
  }
  close() {
    this.buffer += `
      </body>
    </html>
    `
  }
  getResult() {
    return this.buffer
  }
}
