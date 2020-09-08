import { getAverageRating } from './rating.utils'

describe("Unit tests for rating.utils - getAverageRating", () => {
    it("Should accept non-empty objects as 'rating' parameter only", () => {
        expect(getAverageRating("s")).toEqual("error")
        expect(getAverageRating({})).toEqual("error")
        expect(getAverageRating({a: 1})).not.toEqual("error")
    })
    it("Should accept 'rating' objects with numeral values only", () => {
        let invalidRating = { a: "a", b: 2 }
        let validRating = { a: 1, b: 2 }
        expect(getAverageRating(invalidRating)).toEqual("error")
        expect(getAverageRating(validRating)).not.toEqual("error")
    })

    it("Should correctly take the average of the rating object", () => {
        expect(parseFloat(getAverageRating({a: 1, b: 2}))).toBe(1.5)
        expect(parseInt(getAverageRating({a: 0, b: 10}))).toBe(5)
    })

    it("Should format the average rating to a string with correct precision", () => {
        let rating1 = {a:1, b:2}
        let rating2 = {a:0, b:10}
        let precision1 = 2
        let precision2 = 3

        let output11 = getAverageRating(rating1, precision1)
        let output12 = getAverageRating(rating1, precision2)
        let output21 = getAverageRating(rating2, precision1)
        let output22 = getAverageRating(rating2, precision2)

        expect(output11).toEqual("1.50")
        expect(output12).toEqual("1.500")
        expect(output21).toEqual("5.00")
        expect(output22).toEqual("5.000")
    })
})