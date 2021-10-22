import { NumberGenerator } from './number_generator'

export interface Observer {
  update(numberGenerator: NumberGenerator): void
}
