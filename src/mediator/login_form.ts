import { Colleague } from './colleague'
import { Mediator } from './mediator'

class ColleagueButton implements Colleague {
  private mediator: Mediator | null = null
  setMediator(mediator: Mediator): void {
    this.mediator = mediator
  }
  setColleagueEnabled(enabled: boolean): void {
    // setEnabled(enabled)
    throw new Error('Method not implemented.')
  }
}

class ColleagueTextField implements Colleague {
  private mediator: Mediator | null = null
  setMediator(mediator: Mediator): void {
    this.mediator = mediator
  }
  setColleagueEnabled(enabled: boolean): void {
    // setEnabled(enabled)
    // setBackgroundColor
    throw new Error('Method not implemented.')
  }
  textValueChanged(e: string) {
    this.mediator?.colleagueChanged()
  }
}

class ColleagueCheckbox implements Colleague {
  private mediator: Mediator | null = null
  setMediator(mediator: Mediator): void {
    this.mediator = mediator
  }
  setColleagueEnabled(enabled: boolean): void {
    // setEnabled(enabled)
    throw new Error('Method not implemented.')
  }
  itemStateChanged(e: string) {
    this.mediator?.colleagueChanged()
  }
}

class LoginFrame implements Mediator {
  private checkGest: ColleagueCheckbox | null = null
  private checkLogin: ColleagueCheckbox | null = null
  private textUser: ColleagueTextField | null = null
  private textPass: ColleagueTextField | null = null
  private buttonOk: ColleagueButton | null = null
  private buttonCancel: ColleagueButton | null = null
  constructor() {}
  createColleagues(): void {
    this.checkGest = new ColleagueCheckbox()
    this.checkLogin = new ColleagueCheckbox()
  }
  colleagueChanged(): void {
    // if Guestモードなら
    this.textUser?.setColleagueEnabled(false)
    this.textPass?.setColleagueEnabled(false)
    this.buttonOk?.setColleagueEnabled(true)
    // if Loginモードなら
    this.textUser?.setColleagueEnabled(true)
  }
}
