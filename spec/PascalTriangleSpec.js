describe("Pascal Triangle", function() {

  it("when called with n=0 should produce an empty array", function() {
    let triangle = buildPascalTriangle(0);
    
    expect(triangle).toEqual([]);
  });

  it("when called with n=1 should produce a single element [[1]]", function() {
    const n = 1;
    let triangle = buildPascalTriangle(n);
    
    expect(triangle.length).toEqual(n);
    expect(triangle[0]).toEqual([1]);
  });

  it("when called with n=2 should produce two rows: [[1], [1,1]]", function () {
    const n = 2;
    let triangle = buildPascalTriangle(n);

    expect(triangle.length).toEqual(n);
    expect(triangle[0]).toEqual([1]);
    expect(triangle[1]).toEqual([1, 1]);
  });

  it("when called with n=3 should produce three rows: [[1], [1,1], [1,2,1]]", function () {
    const n = 3;
    let triangle = buildPascalTriangle(n);

    expect(triangle.length).toEqual(n);
    expect(triangle[0]).toEqual([1]);
    expect(triangle[1]).toEqual([1, 1]);
    expect(triangle[2]).toEqual([1, 2, 1]);
  });

  it("when called with n=4 should produce four rows: [[1], [1,1], [1,2,1], [1,3,3,1]]", function () {
    const n = 4;
    let triangle = buildPascalTriangle(n);

    expect(triangle.length).toEqual(n);
    expect(triangle[0]).toEqual([1]);
    expect(triangle[1]).toEqual([1, 1]);
    expect(triangle[2]).toEqual([1, 2, 1]);
    expect(triangle[3]).toEqual([1, 3, 3, 1]);
  });

  it("when called with n=5 should produce five rows: [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]", function () {
    const n = 5;
    let triangle = buildPascalTriangle(n);

    expect(triangle.length).toEqual(n);
    expect(triangle[0]).toEqual([1]);
    expect(triangle[1]).toEqual([1, 1]);
    expect(triangle[2]).toEqual([1, 2, 1]);
    expect(triangle[3]).toEqual([1, 3, 3, 1]);
    expect(triangle[4]).toEqual([1, 4, 6, 4, 1]);
  });

  it("when called with n=8 should produce correct values", function () {
    const n = 8;
    let triangle = buildPascalTriangle(n);

    expect(triangle.length).toEqual(n);
    expect(triangle[6]).toEqual([1, 6, 15, 20, 15, 6, 1]);
    expect(triangle[7]).toEqual([1, 7, 21, 35, 35, 21, 7, 1]);
  });

  it("when called with n=12 should produce correct values", function () {
    const n = 12;
    let triangle = buildPascalTriangle(n);

    expect(triangle.length).toEqual(n);
    expect(triangle[10]).toHaveSum(1024);
    expect(triangle[11]).toHaveSum(2048);
  });

  it("when called with n=20 should produce correct values", function () {
    const n = 20;
    let triangle = buildPascalTriangle(n);

    expect(triangle.length).toEqual(n);
    expect(triangle[12]).toHaveSum(4096);
    expect(triangle[13]).toHaveSum(8192);
    expect(triangle[14]).toHaveSum(16384);
    expect(triangle[15]).toHaveSum(32768);
    expect(triangle[16]).toHaveSum(65536);
    expect(triangle[17]).toHaveSum(131072);
    expect(triangle[18]).toHaveSum(262144);
    expect(triangle[19]).toHaveSum(524288);
  });

});


