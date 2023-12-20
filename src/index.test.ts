import { greeter } from "./greeter.js"

describe("greeter", () => {
  it("greets, for reasons we are yet to determine", () => {
    const name = "World";

    expect(greeter(name)).toBe("Hello, World!")
  })
})