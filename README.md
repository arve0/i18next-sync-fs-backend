# i18next-node-fs-sync-backend

[![Travis](https://img.shields.io/travis/i18next/i18next-node-fs-backend/master.svg?style=flat-square)](https://travis-ci.org/i18next/i18next-node-fs-backend)
[![Coveralls](https://img.shields.io/coveralls/i18next/i18next-node-fs-backend/master.svg?style=flat-square)](https://coveralls.io/github/i18next/i18next-node-fs-backend)
[![npm version](https://img.shields.io/npm/v/i18next-node-fs-backend.svg?style=flat-square)](https://www.npmjs.com/package/i18next-node-fs-backend)
[![David](https://img.shields.io/david/i18next/i18next-node-fs-backend.svg?style=flat-square)](https://david-dm.org/i18next/i18next-node-fs-backend)

This is a fork of the official i18next fs backend to be used node.js. It will load resources **synchronously** from filesystem. Right now it supports following filetypes:

- .json
- .json5
- .yml

⚠️ **This is a fork** of the [official fs backend](https://github.com/i18next/i18next-node-fs-backend) and works syncronously.

# Getting started

Source can be loaded via [npm](https://www.npmjs.com/package/i18next-node-fs-sync-backend).

```
$ npm install i18next-node-fs-sync-backend
```

Wiring up:

```js
import i18next from 'i18next';
import Backend from 'i18next-node-fs-sync-backend';

i18next
  .use(Backend)
  .init({
    // This is necessary for this sync version
    // of the backend to work:
    initImmediate: false,
    // ...i18next options
  });

// i18next is immediately ready:
console.log(i18next.t('someKey'));
```

As with all modules you can either pass the constructor function (class) to the i18next.use or a concrete instance.

## Backend Options

```js
{
  // path where resources get loaded from
  loadPath: '/locales/{{lng}}/{{ns}}.json',

  // path to post missing resources
  addPath: '/locales/{{lng}}/{{ns}}.missing.json',

  // jsonIndent to use when storing json files
  jsonIndent: 2
}
```

**hint** {{lng}}, {{ns}} use the same prefix, suffix you define in interpolation for translations!!!

Options can be passed in:

**preferred** - by setting options.backend in i18next.init:

```js
import i18next from 'i18next';
import Backend from 'i18next-node-fs-sync-backend';

i18next
  .use(Backend)
  .init({
    initImmediate: false,
    backend: {
      // Backend options here...
    }
  });
```

on construction:

```js
import Backend from 'i18next-node-fs-sync-backend';
const backend = new Backend(null, options);
```

by calling `init`:

```js
import Backend from 'i18next-node-fs-sync-backend';
const backend = new Backend();
backend.init(options);
```
