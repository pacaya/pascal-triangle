describe("Pascal Triangle", function () {

  it("when called with n=0 should produce an empty array", function () {
    let triangle = buildPascalTriangle(0);

    expect(triangle).to.eql([]);
  });

  it("when called with n=1 should produce a single element [[1]]", function () {
    const n = 1;
    let triangle = buildPascalTriangle(n);

    expect(triangle.length).to.eql(n);
    expect(triangle[0]).to.eql([1]);
  });

  it("when called with n=2 should produce two rows: [[1], [1,1]]", function () {
    const n = 2;
    let triangle = buildPascalTriangle(n);

    expect(triangle.length).to.eql(n);
    expect(triangle[0]).to.eql([1]);
    expect(triangle[1]).to.eql([1, 1]);
  });

  it("when called with n=3 should produce three rows: [[1], [1,1], [1,2,1]]", function () {
    const n = 3;
    let triangle = buildPascalTriangle(n);

    expect(triangle.length).to.eql(n);
    expect(triangle[0]).to.eql([1]);
    expect(triangle[1]).to.eql([1, 1]);
    expect(triangle[2]).to.eql([1, 2, 1]);
  });

  it("when called with n=4 should produce four rows: [[1], [1,1], [1,2,1], [1,3,3,1]]", function () {
    const n = 4;
    let triangle = buildPascalTriangle(n);

    expect(triangle.length).to.eql(n);
    expect(triangle[0]).to.eql([1]);
    expect(triangle[1]).to.eql([1, 1]);
    expect(triangle[2]).to.eql([1, 2, 1]);
    expect(triangle[3]).to.eql([1, 3, 3, 1]);
  });

  it("when called with n=5 should produce five rows: [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]", function () {
    const n = 5;
    let triangle = buildPascalTriangle(n);

    expect(triangle.length).to.eql(n);
    expect(triangle[0]).to.eql([1]);
    expect(triangle[1]).to.eql([1, 1]);
    expect(triangle[2]).to.eql([1, 2, 1]);
    expect(triangle[3]).to.eql([1, 3, 3, 1]);
    expect(triangle[4]).to.eql([1, 4, 6, 4, 1]);
  });

  it("when called with n=8 should produce correct values", function () {
    const n = 8;
    let triangle = buildPascalTriangle(n);

    expect(triangle.length).to.eql(n);
    expect(triangle[6]).to.eql([1, 6, 15, 20, 15, 6, 1]);
    expect(triangle[7]).to.eql([1, 7, 21, 35, 35, 21, 7, 1]);
  });

  it("when called with n=12 should produce correct values", function () {
    const n = 12;
    let triangle = buildPascalTriangle(n);

    expect(triangle.length).to.eql(n);
    expect(triangle[10]).to.have.sum(1024);
    expect(triangle[11]).to.have.sum(2048);
  });

  it("when called with n=20 should produce correct values", function () {
    const n = 20;
    let triangle = buildPascalTriangle(n);

    expect(triangle.length).to.eql(n);
    expect(triangle[12]).to.have.sum(4096);
    expect(triangle[13]).to.have.sum(8192);
    expect(triangle[14]).to.have.sum(16384);
    expect(triangle[15]).to.have.sum(32768);
    expect(triangle[16]).to.have.sum(65536);
    expect(triangle[17]).to.have.sum(131072);
    expect(triangle[18]).to.have.sum(262144);
    expect(triangle[19]).to.have.sum(524288);
  });
});

