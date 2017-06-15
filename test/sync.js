var expect = require('chai').expect;
var i18n = require('i18next');
var path = require('path');

describe('sync', function () {

  it('is ready right after init', function () {
    var backend = require('../lib').default;
    i18n.use(backend).init({
      initImmediate: false,
      backend: {
        loadPath: path.join(__dirname, '/locales/en/test.js')
      }
    }, function (err) {
      if (err) throw new Error(err)
    });
    expect(i18n.t('key')).to.equal('passing')
  });

});
