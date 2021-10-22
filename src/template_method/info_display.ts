import { AbstractDisplay } from './abstract_display'

export class InfoDisplay extends AbstractDisplay {
  #message: string
  constructor(message: string) {
    super()
    this.#message = message
  }

  open() {
    console.log('[INFO]')
  }

  print() {
    console.log(this.#message)
  }

  close() {}
}
