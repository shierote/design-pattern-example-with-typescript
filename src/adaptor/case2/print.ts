import { PrintBanner } from './print_banner'

export abstract class Print {
  abstract printWeak(): void
  abstract printStrong(): void
}

const pb = new PrintBanner('Hello')
pb.printWeak()
pb.printWeak
