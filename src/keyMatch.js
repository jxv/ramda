var curry = require('./curry');

module.exports = curry(function(o, matchers) {
  for (var i in matchers) {
    const matcher = matchers[i];
    const tag = matcher[0];
    const func = matcher[1];
    if (tag in o) {
      return func(o[tag]);
    }
  }
});
