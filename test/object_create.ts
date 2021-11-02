import { assert } from 'console'

class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    console.log('Person created!')
    this.name = name
    this.age = age
  }
  clone(): Person {
    return Object.create(this)
  }
  isSame(person: Person) {
    return this.name === person.name && this.age === person.age
  }
}

const p1 = new Person('Taishi', 23)
const p2 = new Person('Koshi', 20)
const p3 = p1.clone()

assert(p1.isSame(p3))
assert(!p1.isSame(p2))

p3.name = 'Eguchi'

assert(!p1.isSame(p3))
