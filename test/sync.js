var expect = require('chai').expect;
var i18n = require('i18next');
var backend = require('../lib')


describe('sync', function() {

  it('is ready right after init', function() {
    i18n.use(backend).init({
      backend: {
        loadPath: __dirname + '/translation.json' 
      }
    }, function(err){
      if (err) throw new Error(err) 
    });
    expect(i18n.t('key')).to.equal('passing')
  });

});
