import { Module } from 'magnet-core/module'
import defaultConfig from './config/express'

export default class ExpressStart extends Module {
  async setup () {
    try {
      const config = this.prepareConfig('express', defaultConfig)

      this.app.expressServer = this.app.express.listen(config.port)
      this.log.info(`Server started at port ${config.port}`)
    } catch (err) {
      this.log.error(err)
      throw err
    }
  }
}
