const camelize = require("./camelize")

describe('turn any string into camel-case', () => {
  test('trial 1', () => {
    expect(camelize("background-color")).toEqual("backgroundColor");
  });
  test('trial 2', () => {
    expect(camelize("list-style-image")).toEqual("listStyleImage");
  });
  test('trial 3', () => {
    expect(camelize("-webkit-transition")).toEqual("WebkitTransition");
  });
});
