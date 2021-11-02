import { Manager } from './manager'
import { MessageBox } from './message_box'
import { UnderlinePen } from './underline_pen'

const manager = new Manager()
const underlinePen = new UnderlinePen('~')
const aMessageBox = new MessageBox('*')
const sMessageBox = new MessageBox('/')

manager.register('strong message', underlinePen)
manager.register('warning box', aMessageBox)
manager.register('slash box', sMessageBox)

const p1 = manager.create('strong message')
p1.use('Hello, world.')
const p2 = manager.create('warning box')
p2.use('Hello, world.')
const p3 = manager.create('slash box')
p3.use('Hello, world.')
const p4 = manager.create('slash message')
p4.use('Hello, world.')
