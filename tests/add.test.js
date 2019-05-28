const add = require('../add')

test("check adding 2 numbers", ()=>{
    const result = add(2,3);

    expect(result).toBe(5);
    
})