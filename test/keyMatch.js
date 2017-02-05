var listXf = require('./helpers/listXf');

var R = require('..');
var eq = require('./shared/eq');


describe('keyMatch', function() {
  it('returns undefined if empty object and empty matchers', function() {
    eq(R.keyMatch({}, []), undefined);
  });


  it('returns undefined if empty matchers', function() {
    const json = { 'Number': 10 };
    const matchers = [];
    eq(R.keyMatch(json, matchers), undefined);
  });

  it('returns undefined if empty object', function() {
    const json = {};
    const matchers = [
      ['Object', x => x],
      ['Array', x => x.length],
      ['Number', x => 3 * x]
    ];
    eq(R.keyMatch(json, matchers), undefined);
  });

  it('returns a result paired to a matching tag', function() {
    const json = { 'Number': 10 };
    const matchers = [
      ['Object', x => x],
      ['Array', x => x.length],
      ['Number', x => 3 * x]
    ];
    eq(R.keyMatch(json, matchers), 30);
  });

  it('returns a result paired to the first matching tag', function() {
    const json = { 'Number': 10, 'Array': [70, 10] };
    const matchers = [
      ['Object', x => x],
      ['Array', x => x.length],
      ['Number', x => 3 * x]
    ];
    eq(R.keyMatch(json, matchers), 2);
  });

  it('returns undefined with no matching tags', function() {
    const json = { 'Number': null };
    const matchers = [
      ['Object', x => x],
      ['Array', x => x.length]
    ];
    eq(R.keyMatch(json, matchers), undefined);
  });

});
