import React from 'react'
import { STATUS_TEXT_DEFAULTS } from '../data/jobStatusConfig'
import api from '../services/api/api'

/**
 * A dropdown to let users select a status option.
 * @param {number} itemKey - A numeral key that identifies which database entry's option is considered.
 * @param {function} updateCallback - A callback to notify about the status update.
 */
const StatusDropdown = ({ itemKey, updateCallback }) => {

    // update the status
    const handleChange = (e) => {
        let newOption = e.target.options[e.target.selectedIndex].value
        api.put('/status', itemKey, newOption)
        updateCallback()
    }

    /* OPTIONS */
    const defaultOption = <option key="-1" value="-1">select status ... </option>
    const configuredOptions = <>
        { Object.entries(STATUS_TEXT_DEFAULTS).map(([key, val]) => {
            return <option key={key} value={key}>{val}</option>
        }) }
    </>

    /* RENDER */
    return <div className="status-dropdown">
        <select
            name="status-dropdown-select"
            id="status-dropdown=select"
            onChange={(e) => handleChange(e)}
                >
                    { defaultOption }
                    { configuredOptions }    
        </select>
    </div>
}

export default StatusDropdown