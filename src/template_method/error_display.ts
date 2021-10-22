import { AbstractDisplay } from './abstract_display'

export class ErrorDisplay extends AbstractDisplay {
  #message: string
  constructor(message: string) {
    super()
    this.#message = message
  }

  open() {
    console.log('[ERROR]')
    this.printLine()
  }

  print() {
    process.stdout.write('|')
    for (let i = 0; i < this.#message.length; i++) {
      process.stdout.write(this.#message[i])
    }
    process.stdout.write('|')
    console.log()
  }

  close() {
    this.printLine()
  }

  printLine() {
    process.stdout.write('+')
    for (let i = 0; i < 2 * this.#message.length; i++) {
      process.stdout.write('-')
    }
    process.stdout.write('+')
    console.log()
  }
}
