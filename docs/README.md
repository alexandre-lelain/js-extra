# js-extra

[![npm version](https://img.shields.io/npm/v/js-extra.svg?style=flat)](https://www.npmjs.com/package/js-extra) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/alexandre-lelain/js-extra/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/alexandre-lelain/js-extra/pulls)

Does what native Javascript doesn't.

<a id="apiLink" href="#/api">API</a>

## Motivation

From my humble point of view, **Javascript** is lacking of some very useful small built-in functions some other languages, like Python, have.

Yes, [**reduce**](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce) and [**map**](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map) can do quite a lot of things, in quite a lot of situations. They can also often save us in the most desparate situations. But because they are very generic tools, they do not provide a clear straight-forward understanding of what they are used/implemented for.

For example, let's say you want to count the occurences of a number in an array of numbers. For sure, you can do it with a reduce:

```js
array.reduce((count, item) => item === itemToCount ? count + 1 : count, 0)
```

But let's be honest. Don't you think this is so verbose code for a simple count() ?
Why is there not a built-in **count** function in Javascript ?

This is exactly what **js-extra** is built for. Its aim is to provide explicit functions
built on top of the native Javascript functions. Since [Lodash](https://lodash.com/)
already provides many extra functions, the lib will aim to complete it with very
specific functions.

## How to use js-extra

Yarn:
```shell
$ yarn add js-extra
```

Npm:
```shell
$ npm i js-extra
```

You can import the functions this way:

ES6
```js
import { count } from 'js-extra'
```

ES5
```js
var count = require('js-extra').count
```

You can find all the implemented & available functions of the lib [here](/api)

## Contributing

Any contribution would be more than welcome! You think you can optimize the
algorithms of existing functions ? Please, open a PR! :)

You would like to add a function that Javascript doesn't have natively ? Please,
go ahead and open a PR! :)

Found any bugs or you have some ideas ? Please, open an issue! :)

### Installation

```shell
yarn install
```

To build the project:
```shell
yarn build
```

To run the tests:
```shell
yarn test
```

Before you commit:
```shell
yarn lint && yarn prettier
```
