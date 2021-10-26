import { Print } from './print'

export class Banner {
  private str: string
  constructor(str: string) {
    this.str = str
  }
  showWithParen() {
    console.log(`(${this.str})`)
  }
  showWithAster() {
    console.log(`*${this.str}*`)
  }
}

export class PrintBanner extends Print {
  private banner: Banner
  constructor(str: string) {
    super()
    this.banner = new Banner(str)
  }
  printWeak() {
    this.banner.showWithParen()
  }
  printStrong() {
    this.banner.showWithAster()
  }
}
