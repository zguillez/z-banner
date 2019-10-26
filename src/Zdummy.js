'use strict';
require('colors');
const shell = require('shelljs');

/**
 *
 * Class Zdummy
 */
class Zdummy {
  /**
   * Constructor
   */
  constructor() {
  }

  /**
   * Ejecuta un commando de consola
   * @param {string} command
   * @return {Promise}
   */
  shell(command) {
    return new Promise((resolve, reject) => {
      shell.exec(command);
      resolve(true);
    });
  }

  /**
   * Funcion de prueba
   * @param {string} dummy - Dummy File path
   * @return {Promise}
   */
  dummy(dummy) {
    return new Promise((resolve, reject) => {
      if (dummy) {
        resolve(true);
      } else {
        reject(new Error('no dummy'));
      }
    });
  }
}

/**
 * @type {Zdummy}
 */
module.exports = new Zdummy();
