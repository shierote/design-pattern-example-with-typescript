import { argv } from 'process'

export class BigChar {
  private charName: string
  constructor(charName: string) {
    this.charName = charName
  }
  print() {
    process.stdout.write(this.charName)
  }
}

export class BigCharFactory {
  private pool: { [key: string]: BigChar } = {}
  private static singleton = new BigCharFactory()
  private constructor() {}
  static getInstance() {
    return this.singleton
  }
  getBigChar(charName: string): BigChar {
    console.log(this.pool)
    if (charName in this.pool) return this.pool[charName]

    const bigChar = new BigChar(charName)
    this.pool[charName] = bigChar
    return bigChar
  }
}

export class BigSting {
  private bigString: BigChar[] = []
  constructor(bigString: string) {
    const factory = BigCharFactory.getInstance()
    bigString.split('').forEach((char) => {
      this.bigString.push(factory.getBigChar(char))
    })
  }
  print() {
    this.bigString.forEach((bigChar) => {
      bigChar.print()
    })
    console.log()
  }
}

const bigString = new BigSting(argv[argv.length - 1])
bigString.print()
