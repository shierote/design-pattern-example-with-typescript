export class Singleton {
  private static singleton = new Singleton()
  private constructor() {
    console.log('インスタンスを作成しました。')
  }
  static getInstance() {
    return this.singleton
  }
}
