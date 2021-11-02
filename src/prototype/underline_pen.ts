import { Product } from './product'

export class UnderlinePen implements Product {
  private decoChar: string
  constructor(char: string) {
    this.decoChar = char
  }
  use(s: string): void {
    process.stdout.write(s)
    console.log()
    for (let i = 0; i < s.length; i++) {
      process.stdout.write(this.decoChar)
    }
    console.log()
  }
  createClone(): Product {
    return this.clone()
  }
  clone(): Product {
    return Object.create(this)
  }
}
