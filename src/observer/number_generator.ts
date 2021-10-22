import { Observer } from './observer'

export abstract class NumberGenerator {
  private observers: Observer[] = []
  addObserver(observer: Observer) {
    this.observers.push(observer)
  }
  deleteObserver(observer: Observer) {
    this.observers = this.observers.filter((eachObserver) => {
      return eachObserver != observer
    })
  }
  notifyObserver() {
    this.observers.forEach((observer) => {
      observer.update(this)
    })
  }
  abstract getNumber(): number
  abstract execute(): void
}

class RandomNumberGenerator extends NumberGenerator {
  private n: number = 0
  getNumber() {
    return this.n
  }
  execute() {
    ;[...Array(20).keys()].forEach(() => {
      this.n = Math.floor(Math.random() * 50)
      this.notifyObserver()
    })
  }
}

class DigitObserver implements Observer {
  update(generator: NumberGenerator) {
    console.log('DigitObserver: ' + generator.getNumber())
  }
}

class GraphObserver implements Observer {
  update(generator: NumberGenerator) {
    process.stderr.write('GraphObserver: ')
    const count = generator.getNumber()

    ;[...Array(count).keys()].forEach(() => {
      process.stderr.write('*')
    })
    console.log()
  }
}

const generator = new RandomNumberGenerator()
const digitObserver = new DigitObserver()
const graphObserver = new GraphObserver()
generator.addObserver(digitObserver)
generator.addObserver(graphObserver)
generator.execute()
