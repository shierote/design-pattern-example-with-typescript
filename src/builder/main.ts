import { argv } from 'process'
import { Director } from './director'
import { HTMLBuilder } from './html_builder'
import { TextBuilder } from './text_builder'

if (argv[argv.length - 1] == 'plain') {
  const textBuilder = new TextBuilder()
  const director = new Director(textBuilder)
  director.construct()
  console.log(textBuilder.getResult())
} else if (argv[argv.length - 1] == 'html') {
  const htmlBuilder = new HTMLBuilder()
  const director = new Director(htmlBuilder)
  director.construct()
  console.log(htmlBuilder.getResult())
}
