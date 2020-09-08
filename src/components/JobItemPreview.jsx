import React from 'react';
import MaterialIcon from './MaterialIcon'
import StatusIndicator from './StatusIndicator'
import { getAverageRating } from "../utils/rating.utils"



/**
 * A preview containing information related to a job.
 * @param {object} job - The data related to a job entry.
 * @param {function} toggleCallback - A callback upon toggling the view.
 */
const JobItemPreview = ({ job, toggleCallback }) => {


    /* FUNCTIONS */

    // toggle job item preview (maximize)
    const toggleListener = () => {
        if (window.getSelection().toString().length === 0) toggleCallback()
    }


    /* JSX */

    const toggleIcon = <MaterialIcon name="keyboard_arrow_down" />

    const infoHeader = <h3>{job.title} @ {job.company}</h3>

    const statusIndicator = <StatusIndicator statusNumber={job.status} statusText={job.statusText} />

    const ratingSummary = <span>
        <MaterialIcon name="star_rate" extraClasses="orange" />
        <h4>{ getAverageRating(job.rating) }</h4>
    </span>



    /* RENDER */

    return (
        <div className="job-item-preview top-pane" onClick={() => toggleListener()}>
            { toggleIcon }
            { infoHeader }
            { statusIndicator }
            { ratingSummary }
        </div>
    )
}

export default JobItemPreview;