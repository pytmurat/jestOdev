
describe("numaric operators testing",()=>{
  test("greater then",()=>{
    const num1 = 5
    const num2 = 8

    expect(num2).toBeGreaterThan(num1)
    expect(num1).not.toBeGreaterThan(num2)
    expect(num1).not.toBeGreaterThan(num2)
    expect(num1).not.toBeGreaterThan(num2)

  })
})