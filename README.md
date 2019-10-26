# z-dummy
Dummy Module

## Install
```
npm i z-dummy
```
# Usage
```
const dummy = require('z-dummy');
```

## Dummy function

```
dummy.dummy(null).then((data) => {
	console.log(data);
}).catch((err) => {
	console.log(`${err}`.red);
});
```

# Contributing and issues
Contributors are welcome, please fork and send pull requests! If you have any ideas on how to make this project better then please submit an issue or send me an [email](mailto:mail@zguillez.io).

# License
©2019 Zguillez.io

Original code licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License) Open Source projects used within this project retain their original licenses.

# Changelog

### v0.1.0 (January 1, 2020)
* Basic dummy implementation
