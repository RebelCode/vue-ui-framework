// @flow

import {ContainerInterface} from '@/container/ContainerInterface'
import {ExportCapableInterface} from '@/container/ExportCapableInterface'

/**
 * Class for DI container
 *
 * @module Container
 * @interface ContainerInterface
 * @interface ExportCapableInterface
 */
export default class Container implements ContainerInterface, ExportCapableInterface {
  bottle = {};
  container = {};

  /**
   * Insert di library to class
   * @param {object} bottle - DI lib
   */
  constructor (bottle: Object) {
    this.bottle = bottle
    this.container = bottle.container
  }

  /**
   * Getter for services
   * @param {string} key - service name
   * @returns {*}
   */
  get (key: string) {
    const service = this.container[key]
    if (!service) {
      throw new Error(`${key} service does not exists!`)
    }
    return service
  }

  /**
   * Exports all services
   * @returns {{}}
   */
  export () {
    return this.container
  }
}
