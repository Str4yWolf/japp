import React from 'react';
import JobItemToggle from "../containers/JobItemToggle"



/**
 * A container for job items.
 * @param {array<object>} jobs - All jobs to be displayed.
 * @param {function} updateCallback - A callback to notify about updates.
 * @param {function} editModeCallback - A callback to request edit mode toggle.
 */
const JobList = ({ jobs, updateCallback, editModeCallback }) => {

    let content

    if (!jobs || jobs.length === 0) {
        content = <span className="centered">no job items</span>
        
    } else {
        content = jobs.map((job, key) => {
            return <JobItemToggle
                        job={job}
                        key={key}
                        itemKey={key}
                        editModeCallback={editModeCallback}
                        updateCallback={() => updateCallback()}
                    />
        })
    }

    return <div className="job-list">{ content }</div>
}

export default JobList;