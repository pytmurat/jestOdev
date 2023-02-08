const stringTesting = require("../src/StringJest.js")

describe("str testing",()=>{
  test("uppercase testing",()=>{
    const result = stringTesting.upperCase("murat akdoğan")
    expect(result).toMatch("MURAT AKDOĞAN")
  }),
  test("lowercase testşng",()=>{
    const result = stringTesting.lowerCase("MURAT AKDOĞAN")
    expect(result).toMatch("murat akdoğan")
  }),
  test("karsilama testing",()=>{
    const result = stringTesting.karsilama("murat","akdoğan")
    expect(result).toMatch(/iyi çalışmalar murat akdoğan hoşgeldiniz/)
  })
})