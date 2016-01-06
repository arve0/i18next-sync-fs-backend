# i18next-sync-fs-backend
i18next backend which loads resources from filesystem synchronously, in contrast to [i18next-node-fs-backend](https://github.com/i18next/i18next-node-fs-backend) which is async (this is a fork). This avoids having your code wrapped in a `i18next.init()`-callback. Supported filetypes:

- .json
- .json5

## Install

```sh
npm install i18next-sync-fs-backend
```

## Usage

```js
var i18n = require('i18next');
var Backend = require('i18next-sync-fs-backend');

i18n
  .use(Backend)
  .init({}, function(err){
    // handle errors
  });

// use at once
console.log(i18n.t('key'));
```


## Options

```js
var i18n = require('i18next');
var Backend = require('i18next-sync-fs-backend');

i18n
  .use(Backend)
  .init({
    // this is the defaults
    backend: {
      // path where resources get loaded from
      loadPath: '/locales/{{lng}}/{{ns}}.json',

      // path to post missing resources
      addPath: '/locales/{{lng}}/{{ns}}.missing.json',

      // jsonIndent to use when storing json files
      jsonIndent: 2
    }
  });
```
