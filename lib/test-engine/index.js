/* eslint-env node */

var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'other-test-engine',
  lazyLoading: false,

  isDevelopingAddon: function() {
    return true;
  }
});
