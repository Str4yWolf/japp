import React, {useState} from 'react';
import JobItemPreview from "../components/JobItemPreview"
import JobItemDetailView from '../components/JobItemDetailView';



/**
 * A toggle for JobItemPreview (minimized) and JobItemDetailView (maximized).
 * @param {object} job - A job's data to be displayed.
 * @param {number} itemKey - An index based key for the job item.
 * @param {function} editModeCallback - A callback to request edit mode toggle.
 * @param {function} updateCallback - A callback to notify about updates.
 */
const JobItemToggle = ({ job, itemKey, editModeCallback, updateCallback }) => {

    /* STATE */
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => setExpanded(!expanded)

    
    if (!expanded) {
        return <JobItemPreview job={job} toggleCallback={toggleExpanded} />

    } else {
        return <JobItemDetailView
            job={job}
            itemKey={itemKey}
            toggleCallback={toggleExpanded}
            editModeCallback={editModeCallback}
            updateCallback={() => updateCallback()} />
    }
}

export default JobItemToggle;