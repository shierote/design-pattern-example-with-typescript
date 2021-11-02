import { Product } from './product'

export class MessageBox implements Product {
  private decoChar: string
  constructor(char: string) {
    this.decoChar = char
  }
  use(s: string): void {
    for (let i = 0; i < s.length + 2; i++) {
      process.stdout.write(this.decoChar)
    }
    console.log()
    process.stdout.write(this.decoChar)
    process.stdout.write(s)
    process.stdout.write(this.decoChar)
    console.log()
    for (let i = 0; i < s.length + 2; i++) {
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
