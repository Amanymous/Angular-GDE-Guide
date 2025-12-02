let reverseInt = require("./app");

test("Reverse reverses a string", () => {
  expect(reverseInt(-15)).toEqual(-51);
  expect(reverseInt(15)).toEqual(51);
  expect(reverseInt("-15")).toEqual(-51);
});
