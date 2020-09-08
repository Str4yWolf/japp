import { DB_KEY } from '../config'
import { noDatabaseHandler, errorHandler } from './errorHandler.utils'



/**
 * GET
 * Gets the database whose key is specified by DB_KEY variable.
 * @return {array<object>} The database entries as objects.
 */
const load = () => {
    try {
        let response = JSON.parse(localStorage.getItem(DB_KEY))
        if (response == undefined || response == null) return noDatabaseHandler()            
        return response
    } catch(err) {
        errorHandler(err)
    }
}


/**
 * Saves database entries to local storage.
 * @param {array<object>} db - The database entries.
 */
const save = (db) => {
    try {
        localStorage.setItem(DB_KEY, JSON.stringify(db))
    } catch(err) {
        errorHandler(err)
    }
}


const database = { load, save }

export default database