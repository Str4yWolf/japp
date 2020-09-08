import React, { useState } from 'react'
import StatusIndicator from '../components/StatusIndicator'
import StatusDropdown from '../components/StatusDropdown'



/**
 * Toggle between StatusIndicator (state display) and StatusDropdown (state editor).
 * @param {number} [statusNumber = 0] - The numeral key of the job status.
 * @param {number} itemKey - The index based key for the job item.
 * @param {function} updateCallback - The callback to notify about updates.
 */
const StatusToggle = ({ statusNumber = 0, itemKey, updateCallback }) => {

    /* STATE */
    const [editMode, setEditMode] = useState(false)
    const toggleEditMode = () => setEditMode(!editMode)

    // callback for children
    const updateStatus = () => {
        updateCallback()
        toggleEditMode()
    }

    
    /* JSX */
    let content
    if (editMode) {
        content = <StatusDropdown
                    itemKey={itemKey}
                    updateCallback={updateStatus} />
    } else {
        content = <StatusIndicator
                    statusNumber={statusNumber}
                    toggleCallback={toggleEditMode}/>
    }

    return <span className="status-toggle">{ content }</span>

}

export default StatusToggle