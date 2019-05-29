const method = require('../add')

test("check adding 2 numbers", () => {
    const result = method.add(2,3);
    expect(result).toBe(5);    
});
test("check divide 2 numbers", () => {
    const result = method.divide(10,5);
    expect(result).toBe(3);
});