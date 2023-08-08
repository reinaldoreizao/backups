import { LoggUserObjModel, LoggUserRepository } from "@loggUser"

export class LoggRepositoryProductionTodo1 implements LoggUserRepository {
  public items: LoggUserObjModel[]

  constructor() {
    this.items = []
  }

  async create(loggUserObj: LoggUserObjModel) {
    this.items.push(loggUserObj)
    return await loggUserObj
  }

  async list() {
    return await this.items
  }

}

export const poleLoggRepositoryProductionTodo1 = new LoggRepositoryProductionTodo1
