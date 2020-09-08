import database from '../utils/database.utils'
import { isValidIndex, isValidEntryIdPath } from '../utils/validation.utils'
import { errorHandler } from '../utils/errorHandler.utils'



/**
 * GET
 * Get all database entries.
 * @return {array<object>} The database.
 */
const getDatabase = () => {
    try {
        let db = database.load()
        return db
    } catch(err) {
        errorHandler(err)
    }
}

/**
 * GET
 * Get a specific database entry.
 * @param {number} path - The path '/:id' including the index of the element to get.
 * @return {object} The database entry at the given index.
 */
const getDatabaseEntry = (path) => {
    try {
        if (!isValidEntryIdPath(path)) throw new Error("Invalid id path for database entry")
        // Important, as floats and other number types may be qualified as valid entry path
        // when they can be represented as an integer (see isValidEntryIdPath function for details)
        let idx = parseInt(path.slice(1))
        
        if (!isValidIndex(idx)) throw new Error("Invalid index")
        let db = database.load()
        let entry = db[idx]
        
        if (!entry) throw new Error("No entry found at given index")
        
        return entry
    } catch(err) {
        errorHandler(err)
    }
}


/**
 * POST
 * Appends an object to the database.
 * @param {object} obj - An entry.
 */
const appendToDatabase = (obj) => {
    try {
        if (typeof obj !== 'object') throw new Error("New database entries have to be objects.")
        let db = database.load()
        db.push(obj)
        database.save(db)
    } catch(err) {
        errorHandler(err)
    }
}


/**
 * PUT
 * Updates an object entry of the database.
 * @param {number} idx - The index of the object to change. 
 * @param {object} newObj - The object that replaces the old entry.
 */
const updateEntry = (idx, newObj) => {
    try {
        if (typeof newObj !== 'object') throw new Error("Database object passed in parameters is invalid.")
        if (!isValidIndex(idx)) throw new Error("Invalid index")
        let db = database.load()
        db.splice(idx, 1, newObj)
        database.save(db)
    } catch(err) {
        errorHandler(err)
    }
}


/**
 * DELETE
 * Deletes an object from the database.
 * @param {number} idx - The index of the element to delete.
 */
const deleteFromDatabase = (idx) => {
    try {
        if (!isValidIndex(idx)) throw new Error("Invalid index")
        let db = database.load()
        db.splice(idx, 1)
        database.save(db)
    } catch(err) {
        errorHandler(err)
    }
}



const route = {
    getDatabase,
    getDatabaseEntry,
    appendToDatabase,
    updateEntry,
    deleteFromDatabase
}

export default route