import { DB_KEY } from '../config'



/**
 * To be called when there is no database for this app given current configurations.
 */
export const noDatabaseHandler = () => {
    try {
        localStorage.setItem(DB_KEY, JSON.stringify([]))
        console.log(`No database under '${DB_KEY}' key. Created new database under that key.`)
    } catch(err) {
        errorHandler(err)
    }
}


/**
 * Default error handler.
 * @param {Error} err - An error object.
 */
export const errorHandler = (err) => {
    console.error(err)
    alert(err)
}