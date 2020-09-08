import { STATUS_TEXT_DEFAULTS } from '../../../data/jobStatusConfig'
import { ENTRY_ID_PATH_REGEX } from '../config'



/**
 * Checks whether given parameter is a valid index.
 * @param {number} idx - Expected to be a integer at least 0.
 */
export const isValidIndex = (idx) => {
    if (typeof idx !== "number") {
        console.error("Validation of index failed: not a number.")
        return false
    } else if (!Number.isInteger(idx)) {
        console.error("Validation of index failed: not an integer.")
        return false
    } else if (idx < 0) {
        console.error("Validation of index failed: index less than 0")
        return false
    }

    return true
}


/**
 * Checks whether given parameter is a valid status.
 * @param {number} statusNum - Expected to be a status number that is specified as key in STATUS_TEXT_DEFAULTS configuration.
 */
export const isValidStatus = (statusNum) => {
    let VALID_STATUS_NUMS = Object.keys(STATUS_TEXT_DEFAULTS)
    if (!VALID_STATUS_NUMS.includes(statusNum)) {
        console.error("Validation of status failed: unknown status number")
        return false
    }

    return true
}


/**
 * Checks whether given (database entry) id path is valid according to configuration.
 * @param {number} path - The index based id path for a database entry.
 */
export const isValidEntryIdPath = (path) => {
    return ENTRY_ID_PATH_REGEX.test(path)
}