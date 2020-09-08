import rootRoute from './root'
import { isValidIndex, isValidStatus } from '../utils/validation.utils'
import { errorHandler } from '../utils/errorHandler.utils'



/**
 * PUT
 * Update an entry's status.
 * @param {number} idx - The index of the element whose status should be updated.
 * @param {number} newStatus - The new numeric status of the element in question.
 */
const updateStatus = (idx, newStatus) => {
    try {
        if (!isValidIndex(idx)) throw new Error("Invalid index" + idx)
        if (!isValidStatus(newStatus)) throw new Error("Invalid status")

        let entry = rootRoute.getDatabaseEntry("/" + idx)
        entry.status = newStatus
        rootRoute.updateEntry(idx, entry)
    } catch(err) {
        errorHandler(err)
    }
}



const route = {
    updateStatus
}

export default route