beforeEach(function () {
  jasmine.addMatchers({
    toHaveSum: function () {
      return {
        compare: function (actual, expected) {
          var row = actual;

          return {
            pass: row.reduce((sum, e) => sum + e, 0) === expected
          };
        }
      };
    }
  });
});
