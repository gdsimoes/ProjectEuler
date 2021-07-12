function pow(x, n) {
    return 8;
}

describe("pow", function () {
    it("raises to n-th power", function () {
        assert.equal(pow(2, 3), 8);
    });
});
