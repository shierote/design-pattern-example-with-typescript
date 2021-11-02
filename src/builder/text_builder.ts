import { Builder } from './builder'

export class TextBuilder implements Builder {
  private buffer: string = ''
  makeTitle(title: string) {
    this.buffer += '=========================='
    this.buffer += '\n'
    this.buffer += `[${title}]`
    this.buffer += '\n'
    this.buffer += '\n'
  }
  makeString(str: string) {
    this.buffer += `■${str}`
    this.buffer += '\n'
    this.buffer += '\n'
  }
  makeItems(items: string[]) {
    items.forEach((item) => {
      this.buffer += `  ・${item}`
      this.buffer += '\n'
    })
    this.buffer += '\n'
  }
  close() {
    this.buffer += '=========================='
    this.buffer += '\n'
  }
  getResult() {
    return this.buffer
  }
}
