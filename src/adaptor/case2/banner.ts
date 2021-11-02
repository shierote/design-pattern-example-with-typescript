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
