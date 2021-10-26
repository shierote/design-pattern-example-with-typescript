import { Banner } from './banner'

export interface Print {
  printWeak(): void
  printStrong(): void
}

export class PrintBanner extends Banner implements Print {
  constructor(str: string) {
    super(str)
  }
  printWeak(): void {
    this.showWithParen()
  }
  printStrong(): void {
    this.showWithAster()
  }
}

const p = new PrintBanner('Hello')
p.printWeak()
p.printStrong()
