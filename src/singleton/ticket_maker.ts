class TicketMaker {
  private ticketMaker = new TicketMaker()
  private ticket: number
  private constructor() {
    this.ticket = 1000
  }
  getNextTickerNumber() {
    return this.ticket
  }
}
