import { Module } from 'magnet-core/module'
import * as express from 'express'

import defaultConfig from './config/express'

// TODO: Increase the speed of get cert, or anyway to cache it?
export default class Express extends Module {
  async setup () {
    const config = this.prepareConfig('express', defaultConfig)

    this.app.express = express()
  }
}
