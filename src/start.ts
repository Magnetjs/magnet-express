import { Module } from 'magnet-core/module'

export default class MagnetExpressStart extends Module {
  get moduleName () { return 'express' }
  get defaultConfig () { return __dirname }

  async setup () {
    this.app.expressServer = this.app.express.listen(this.config.port)
    this.log.info(`Server started at port ${this.config.port}`)
  }
}
