import { ErrorDisplay } from './error_display'
import { InfoDisplay } from './info_display'

const infoMessage1 = new InfoDisplay('正常に動いています！')
const infoMessage2 = new InfoDisplay('うまく動いています！')
const errorMessage = new ErrorDisplay('エラーが起きています！！！')

infoMessage1.display()
infoMessage2.display()
errorMessage.display()
