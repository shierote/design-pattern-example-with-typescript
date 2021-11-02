import { notDeepEqual } from 'assert'
import { Product } from './product'

export class Manager {
  private showcase: { [key: string]: Product } = {}
  register(name: string, proto: Product) {
    this.showcase[name] = proto
  }
  create(protoName: string) {
    if (!(protoName in this.showcase))
      throw `NotFoundError "${protoName}" is not registered in Manager`
    const product = this.showcase[protoName]
    return product.createClone()
  }
}
