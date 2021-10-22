export abstract class AbstractDisplay {
  abstract open(): void
  abstract print(): void
  abstract close(): void
  display() {
    this.open()
    this.print()
    this.close()
  }
}
