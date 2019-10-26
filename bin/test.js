#!/usr/local/bin/node
//
const path = require('path');
const zdummy = require('../src/Zdummy');
const dummy = path.resolve(__dirname, './dummy.jpg');
zdummy.dummy(dummy).then(() => {
  console.log(`Dummy is done`.green);
}).catch((err) => {
  console.log(`${err}`.red);
});

