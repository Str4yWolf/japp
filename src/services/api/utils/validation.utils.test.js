import { isValidIndex, isValidStatus, isValidEntryIdPath } from './validation.utils';
import { STATUS_TEXT_DEFAULTS } from '../../../data/jobStatusConfig';

describe("Unit tests for validation.utils - isValidIndex", () => {
    it("Should detect when input is not a number", () => {
        expect(isValidIndex("1")).toBe(false)
    })
    it("Should detect when input is not an integer", () => {
        expect(isValidIndex(1.1)).toBe(false)
        console.log("%c Note: In JS, the float number 1.0 is considered an integer.")
        expect(isValidIndex(1.0)).toBe(true)
    })
    it("Should detect when there is a negative input", () => {
        expect(isValidIndex(-1)).toBe(false)
    })
    it("Should validate to true otherwise", () => {
        expect(isValidIndex(0)).toBe(true)
        expect(isValidIndex(1)).toBe(true)
    })
})

describe("Unit tests for validation.utils - isValidStatus", () => {
    let VALID_STATUS_NUMS = Object.keys(STATUS_TEXT_DEFAULTS)
    it("Should detect generally invalid statuses", () => {
        expect(isValidStatus(" ")).toBe(false)
        expect(isValidStatus(-1)).toBe(false)
    })
    it("Should detect valid statuses if they exist in the STATUS_TEXT_DEFAULTS", () => {
        expect(VALID_STATUS_NUMS.every(num => {
            return isValidStatus(num)
        })).toBe(true)
    })
})

describe("Unit tests for validation.utils - isValidEntryIdPath", () => {
    it("Should detect invalid entry id paths", () => {
        expect(isValidEntryIdPath("")).toBe(false)
        expect(isValidEntryIdPath(1)).toBe(false)
        expect(isValidEntryIdPath("/")).toBe(false)
        expect(isValidEntryIdPath("0/")).toBe(false)
        expect(isValidEntryIdPath("/0/")).toBe(false)

        expect(isValidEntryIdPath("/-1")).toBe(false)
        expect(isValidEntryIdPath("/10000")).toBe(false)
    })
    it("Should detect valid entry id paths", () => {
        expect(isValidEntryIdPath("/0")).toBe(true)
        expect(isValidEntryIdPath("/1")).toBe(true)
        expect(isValidEntryIdPath("/9999")).toBe(true)
    })
})