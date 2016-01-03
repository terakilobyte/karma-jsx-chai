var path = require('path');

var createPattern = function (path) {
  return {
    pattern: path,
    included: true,
    served: true,
    watched: false
  };
}

var framework = function (files) {
  files.unshift(createPattern(__dirname + '/adapter.js'));
  files.unshift(createPattern(path.dirname(require.resolve('jsx-chai')) + '/jsx-chai.jsx'));
  files.unshift(createPattern(path.dirname(require.resolve('chai')) + '/chai.js'));
}

framework.$inject = ['config.files'];
module.exports = {'framework:jsx-chai': ['factory', framework]}
