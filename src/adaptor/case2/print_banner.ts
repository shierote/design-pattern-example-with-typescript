import { Banner } from './banner'
import { Print } from './print'

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
