# z-banner
NodeJS module for html5 banner wrapper

## Install
```
npm i z-banner
```
# Usage
```
const zbanner = require('z-banner');
```

## Wrap banner

```
const data = {
  'template': 'image', // image|video|enabler
  'size': [300, 250],
  'filename': 'dummy.jpg',
  'clicktag': 'http://google.es',
  'output': ['.temp', 'index.html'],
};
```

### Templates

```'template': 'image',``` Image banner with clickTag
```'template': 'video',``` Video banner with clickTag
```'template': 'enabler',``` Banner with Enabler.js


# Contributing and issues
Contributors are welcome, please fork and send pull requests! If you have any ideas on how to make this project better then please submit an issue or send me an [email](mailto:mail@zguillez.io).

# License
©2019 Zguillez.io

Original code licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License) Open Source projects used within this project retain their original licenses.

# Changelog

### v0.1.0 (October 27, 2019)
* Basic zbanner implementation
