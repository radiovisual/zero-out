# zero-out

> Zero out (round-out/approximate) numerical values: `123,456,789` → `123,000,000`

[![Build Status](https://travis-ci.org/radiovisual/zero-out.svg?branch=master)](https://travis-ci.org/radiovisual/zero-out)


## Install

```
$ npm install --save zero-out
```


## Usage

```js
const zeroOut = require('zero-out');

zeroOut('123,456,789');
//=> '123,000,000'
```


## API

### zeroOut(input, [options])

#### input

Type: `string|number`

The value you want to round out.

#### options

##### up

Type: `boolean`  
Default: `false`

Round the value up. `12,345,789` → `13,000,000`

##### down

Type: `boolean`  
Default: `false`

Round the value down. `12,345,789` → `11,000,000`

##### pad

Type: `string`  
Default: `0`

Custom pad the values. `12,345,789` → `12,xxx,xxx`

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
