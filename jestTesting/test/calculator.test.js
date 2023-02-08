const math = require("../src/calculator.js")

describe("calculator test",()=>{
  test("addition of two number",()=>{
    const result = math.sum(2,5)
    expect(result).toBe(7)
  }),

  test("diff of two number",()=>{
    const result =  math.diff(5,2)
    expect(result).toBe(3)
  }),
  test("product of two number",()=>{
    const result =  math.product(2,2)
    expect(result).toBe(4)
  }),

  test("Division of 2 numbers", () => {
    const result =  math.divide(8,8)
    expect(result).toBe(1)
  }),
  test("dairenin alanı",()=>{
    const result = math.daireAlani(2)
    expect(result).toBe(12.56)
  })
 
})