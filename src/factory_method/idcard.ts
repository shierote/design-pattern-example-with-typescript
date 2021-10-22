import { Factory, Product } from './factory'

class IDCard extends Product {
  private owner: string
  constructor(owner: string) {
    super()
    this.owner = owner
    console.log(`${this.owner}のカード作ります。`)
  }

  use() {
    console.log(`${this.owner}のカード使います。`)
  }
  getOwner() {
    return this.owner
  }
}

class IDCardFactory extends Factory {
  private owners: string[] = []
  protected createProduct(owner: string) {
    return new IDCard(owner)
  }
  protected registerProduct(product: Product) {
    this.owners.push((product as IDCard).getOwner())
  }
  public getOwners() {
    return this.owners
  }
}

const factory = new IDCardFactory()
const card1 = factory.create('結城')
const card2 = factory.create('戸村')
const card3 = factory.create('江口')
card1.use()
card2.use()
card3.use()
