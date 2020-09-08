/**
 * Transforms pascal to camel case.
 * @param {string} text - String of text in PascalCase (also with single whitespace).
 * @return {string} String in camelCase.
 */
export const pascalToCamel = (text) => {
    try {
        if (typeof text !== "string") throw new Error("Input parameter is not a string.")
        if (text.trim() === "") throw new Error("Input does not contain anything but whitespace.")
        
        // remove single whitespace if there are any
        const spaceless = text.split(" ").join("")
        return spaceless.charAt(0).toLowerCase() + spaceless.slice(1)
    } catch(err) {
        console.error(err)
        return "error"
    }
}