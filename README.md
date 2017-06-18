# i18next-sync-fs-backend

[![Travis](https://img.shields.io/travis/sallar/i18next-sync-fs-backend/master.svg?style=flat-square)](https://travis-ci.org/sallar/i18next-sync-fs-backend)
[![CodeCov](https://img.shields.io/codecov/c/github/sallar/i18next-sync-fs-backend.svg?style=flat-square)](https://codecov.io/gh/sallar/i18next-sync-fs-backend)
[![npm version](https://img.shields.io/npm/v/i18next-sync-fs-backend.svg?style=flat-square)](https://www.npmjs.com/package/i18next-sync-fs-backend)

This is a fork of the official i18next fs backend to be used node.js. It will load resources **synchronously** from filesystem. Right now it supports following filetypes:

- .json
- .json5
- .yml

⚠️ **This is a fork** of the [official fs backend](https://github.com/i18next/i18next-node-fs-backend) and works syncronously.

✨ Thanks to [@arve0](https://github.com/arve0) for transferring the Github repo to me. His old code is available in `legacy` branch.

# Getting started

Source can be loaded via [npm](https://www.npmjs.com/package/i18next-sync-fs-backend).

```
$ npm install i18next-sync-fs-backend
```

Wiring up:

```js
import i18next from 'i18next';
import Backend from 'i18next-sync-fs-backend';

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
import Backend from 'i18next-sync-fs-backend';

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
import Backend from 'i18next-sync-fs-backend';
const backend = new Backend(null, options);
```

by calling `init`:

```js
import Backend from 'i18next-sync-fs-backend';
const backend = new Backend();
backend.init(options);
```
