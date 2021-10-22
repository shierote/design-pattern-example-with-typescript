import { Book, BookShelf } from './bookshelf'

const bookShelf = new BookShelf()
bookShelf.appendBook(new Book('イシューから始めよ'))
bookShelf.appendBook(new Book('聖書'))
bookShelf.appendBook(new Book('論語'))
bookShelf.appendBook(new Book('孫子'))
bookShelf.appendBook(new Book('方法序説'))

const itr = bookShelf.iterator()
while (itr.hasNext()) {
  const book = itr.next()
  console.log(book.getName())
}
