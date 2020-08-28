<div align="center">

<p align="center">
  <a href="https://js-extra.netlify.app" rel="noopener" target="_blank"><img width="150" src="docs/img/js-extra.webp" alt="Js-extra logo"></a></p>
</p>

<h1>js-extra</h1>

<p>Does what native JavaScript doesn't.</p>

**[js-extra docs](https://js-extra.netlify.app/)**

<br/>

[![npm version](https://img.shields.io/npm/v/js-extra.svg?style=flat)](https://www.npmjs.com/package/js-extra)
[![ci status](https://travis-ci.org/alexandre-lelain/js-extra.svg?branch=master)](https://travis-ci.org/alexandre-lelain/js-extra)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/alexandre-lelain/js-extra/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/alexandre-lelain/js-extra/pulls)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![build formats](https://img.shields.io/badge/module%20formats-cjs%2C%20esm-green.svg)](https://github.com/alexandre-lelain/js-extra)
[![bundle size](https://badgen.net/bundlephobia/min/js-extra@latest)](https://bundlephobia.com/result?p=js-extra@latest)

<br/>

</div>

## Menu

- [Motivation](#motivation)
- [How to use js-extra](#how-to-use-js-extra)
- [API](#api)
- [Contributing](#contributing)

## Motivation

From my humble point of view, **JavaScript** is lacking of some very useful small built-in functions some other languages, like Python, have.

Yes, [**reduce**](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce) and [**map**](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map) can do quite a lot of things, in quite a lot of situations. They can also often save us in the most desparate situations. But because they are very generic tools, they do not provide a clear straight-forward understanding of what they are used/implemented for.

For example, let's say you want to **count** the occurences of a number in an array of numbers. For sure, you can do it with a **reduce**:

```js
array.reduce((count, item) => item === itemToCount ? count + 1 : count, 0)
```

But let's be honest. Don't you think this is so verbose code for a simple count() ?
Why is there not a built-in **count** function in JavaScript ?

This is exactly what **js-extra** is built for. Its aim is to provide explicit functions
built on top of the native JavaScript functions. Since [Lodash](https://lodash.com/)
already provides many extra functions, the lib will aim to complete it with very
specific functions.

With **js-extra** the above code becomes:

```js
count(array, itemToCount)
```

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
var { count } = require('js-extra')
```

You can find all the implemented & available functions of the lib [here](https://js-extra.netlify.com/#/api).

**js-extra** is **tree-shakeable** and **side-effects free**!

## API

The API is available here: [js-extra API](https://js-extra.netlify.com/#/api)

## Contributing

Any contribution would be more than welcome! You think you can optimize the
algorithms of existing functions ? Please, open a PR! :)

You would like to add a function that JavaScript doesn't have natively ? Please,
go ahead and open a PR! :)

Found any bugs or you have some ideas ? Please, open an issue! :)

**The following commands are executed with [yarn](https://yarnpkg.com/lang/en/), but you can of course use any package manager tool like npm or npx.**

To install dependencies:

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
yarn validate
```
