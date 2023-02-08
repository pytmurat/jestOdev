const TekCift = require("../src/TekCift.js")

describe("tek mi çift mi testing",()=>{
  test("çift ise true ",()=>{
    const result = TekCift(10)
    expect(result).toBeTruthy() 
  }),
  test("tek ise false ",()=>{
    const result = TekCift(9)
    expect(result).not.toBeTruthy()
  })
})