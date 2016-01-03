(function(window) {
  window.should = null; //Workaround for "RangeError" in PhantomJS
  window.should = window.chai.should();
  window.expect = window.chai.expect;
  window.assert = window.chai.assert;
});
