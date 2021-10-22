import { writeFile } from 'fs'

abstract class Item {
  protected caption: string
  constructor(caption: string) {
    this.caption = caption
  }
  abstract makeHTML(): string
}

abstract class Link extends Item {
  protected url: string
  constructor(caption: string, url: string) {
    super(caption)
    this.url = url
  }
}

abstract class Tray extends Item {
  protected tray: Item[]
  constructor(caption: string) {
    super(caption)
    this.tray = []
  }
  add(item: Item) {
    this.tray.push(item)
  }
}

abstract class Page {
  protected title: string
  protected author: string
  protected content: Item[] = []
  constructor(title: string, author: string) {
    this.title = title
    this.author = author
  }
  add(item: Item) {
    this.content.push(item)
  }
  output() {
    writeFile(`${this.title}.html`, this.makeHTML(), (err) => {
      if (err) throw err
      console.log('正常に書き込みが完了しました。')
    })
  }
  abstract makeHTML(): string
}
