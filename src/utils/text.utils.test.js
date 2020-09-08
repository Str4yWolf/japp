import { pascalToCamel } from './text.utils'

describe("Unit tests for text.utils - pascalToCamel.", () => {
    it("Should not process anything but non-whitespace strings", () => {
        expect(pascalToCamel(1)).toEqual("error")
        expect(pascalToCamel("")).toEqual("error")
        expect(pascalToCamel(" ")).toEqual("error")
        expect(pascalToCamel("    ")).toEqual("error")

        expect(pascalToCamel("Hello World")).not.toEqual("error")
    })

    it("Should remove all whitespace from a non-whitespace string", () => {
        expect(pascalToCamel("Hello World").indexOf(" ")).toBe(-1)
        expect(pascalToCamel("Hello World Hello World").indexOf(" ")).toBe(-1)
    })

    it("Should make the only first letter lowercase", () => {
        let result = pascalToCamel("Hello World Hello World")
        expect(result.charAt(0)).toEqual("h")
        expect(result).toEqual("helloWorldHelloWorld")
    })
})