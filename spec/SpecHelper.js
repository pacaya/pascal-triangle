chai.Assertion.addMethod('sum', function (expected) {
  const obj = this._obj;

  const sum = obj.reduce((sum, e) => sum + e, 0);
  // second, our type check
  this.assert(
    sum === expected
    , "expected #{this} to be of type #{exp} but got #{act}"
    , "expected #{this} to not be of type #{act}"
    , expected        // expected
    , sum   // actual
  );
});