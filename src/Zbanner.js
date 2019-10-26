'use strict';
require('colors');
const path = require('path');
const shell = require('shelljs');
const zfile = require('z-file');

/**
 *
 * Class Zbanner
 */
class Zbanner {
  /**
   * Constructor
   */
  constructor() {}

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
   * @param {object} data - Data for banner
   * const data = {
   *  'template': 'enabler',
   *  'path': path.resolve(__dirname, './dummy.jpg'),
   *  'width': 300,
   *  'height': 250,
   *  'clicktag': 'http://google.es',
   *  'output': '.',
   * };
   * @return {Promise}
   */
  wrap(data) {
    return new Promise((resolve, reject) => {
      if (data['template'] && data['size'] && data['filename'] && data['clicktag'] && data['output']) {
        if (data['size'].length == 2 && data['output'].length == 2) {
          if (data['template'] === 'image' || data['template'] === 'video' || data['template'] === 'enabler') {
            const template = path.resolve(__dirname, `../templates/${data['template']}.html`);
            this.wrapper(template, data, resolve);
            resolve(true);
          } else {
            reject(new Error('bad template [image|video|enabler]'));
          }
        } else {
          reject(new Error('bad data: size[,] || output[,]'));
        }
      } else {
        reject(new Error('bad data'));
      }
    });
  }

  /**
   * @param {object} template - Template path
   * @param {object} data - Banner data
   * @param {function} resolve - Promise callback
   */
  wrapper(template, data, resolve) {
    const filePath = `${data['output'][0]}/${data['output'][1]}`;
    const file = zfile.create(filePath);
    file.load(template)
        .then(() => file.save())
        .then(() => zfile.replace(filePath, '%FILENAME%', data['filename']))
        .then(() => zfile.replace(filePath, '%WIDTH%', data['size'][0]))
        .then(() => zfile.replace(filePath, '%HEIGHT%', data['size'][1]))
        .then(() => zfile.replace(filePath, '%CLICKTAG%', data['clicktag']))
        .then(resolve(true));
  }
}

/**
 * @type {Zbanner}
 */
module.exports = new Zbanner();
