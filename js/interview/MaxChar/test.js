let maxChar = require("./app");

test("maxChar a string", () => {
  expect(maxChar(-15)).toEqual(-51);
  expect(maxChar(15)).toEqual(51);
  expect(maxChar("-15")).toEqual(-51);
});
