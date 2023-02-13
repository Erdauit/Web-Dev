describe("Возводит x в степень n", function() {
    it("5 в степени 1 будет 5", function() {
      assert.equal(pow(5, 1), 5);
    });
  
    it("5 в степени 2 будет 25", function() {
      assert.equal(pow(5, 2), 25);
    });
  
    it("5 в степени 3 будет 125", function() {
      assert.equal(pow(5, 3), 125);
    });
});
  