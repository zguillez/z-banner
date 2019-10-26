#!/usr/local/bin/node
//
const zbanner = require('../src/Zbanner');
const data = {
  'template': 'image', // image|video|enabler
  'size': [300, 250],
  'filename': 'dummy.jpg',
  'clicktag': 'http://google.es',
  'output': ['.temp', 'index.html'],
};
zbanner.wrap(data)
    .then(() => {
      data.template = 'video';
      data.output[1] = 'video.html';
      return zbanner.wrap(data);
    })
    .then(() => {
      data.template = 'enabler';
      data.output[1] = 'enabler.html';
      return zbanner.wrap(data);
    })
    .then(() => console.log(`Banner is done`.green))
    .catch((err) => console.log(`${err}`.red));
