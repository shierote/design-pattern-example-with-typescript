import { Aggregate, Iterator } from './iterator'

export class Book {
  #name: string
  constructor(name: string) {
    this.#name = name
  }

  getName(): string {
    return this.#name
  }
}

export class BookShelf implements Aggregate<Book> {
  #books: Book[]
  constructor() {
    this.#books = []
  }

  getBookAt(index: number): Book {
    return this.#books[index]
  }

  appendBook(book: Book) {
    this.#books.push(book)
  }

  getLength() {
    return this.#books.length
  }

  iterator() {
    return new BookShelfIterator(this)
  }
}

export class BookShelfIterator implements Iterator<Book> {
  #bookShelf: BookShelf
  #index: number
  constructor(bookShelf: BookShelf) {
    this.#bookShelf = bookShelf
    this.#index = this.#bookShelf.getLength() - 1
    // this.#index = 0
  }
  hasNext() {
    return 0 <= this.#index && this.#index < this.#bookShelf.getLength()
  }
  next() {
    const book = this.#bookShelf.getBookAt(this.#index)
    this.#index--
    // this.#index++
    return book
  }
}
