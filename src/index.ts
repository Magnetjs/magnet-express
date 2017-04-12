import { Module } from 'magnet-core/module'
import * as express from 'express'

export default class MagnetExpress extends Module {
  get moduleName () { return 'express' }
  get defaultConfig () { return __dirname }

  async setup () {
    this.insert(express())
  }
}
