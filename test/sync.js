const expect = require('chai').expect;
const i18n = require('i18next');
const path = require('path');

describe('sync', function () {

  it('is ready right after init', function () {
    const backend = require('../lib').default;
    i18n.use(backend).init({
      initImmediate: false,
      backend: {
        loadPath: path.join(__dirname, '/locales/en/test.js')
      }
    }, err => {
      if (err) {
        throw new Error(err);
      }
    });
    expect(i18n.t('key')).to.equal('passing');
  });

});
