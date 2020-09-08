import React from 'react'
import MaterialIcon from './MaterialIcon'
import RatingDisplay from './RatingDisplay'
import StatusToggle from '../containers/StatusToggle'
import { getAverageRating } from '../utils/rating.utils.js'
import api from '../services/api/api'



/**
 * The detail view containing information and options related to a job.
 * @param {object} job - The data related to a job entry.
 * @param {number} itemKey - The index based key for the job entry.
 * @param {function} toggleCallback - A callback upon toggling the view.
 * @param {function} editModeCallback - A callback upon enabling edit mode.
 * @param {function} updateCallback - A callback to notify to update.
 */
const JobItemDetailView = ({ job, itemKey, toggleCallback, editModeCallback, updateCallback }) => {

    /* DATA */
    let totalAvgRating = getAverageRating(job.rating, 2)



    /* FUNCTIONS */

    // toggle job item detail view (minimize)
    let toggleListener = () => {
        if (window.getSelection().toString().length === 0) toggleCallback()
    }

    // show an edit form
    let toggleEditMode = () => {
        editModeCallback(itemKey, job)
    }

    // confirm user delete action
    let confirmDelete = () => {
        let deleteConfirm = window.confirm("Do you really want to delete the current job item? It cannot be undone.")
        if (deleteConfirm) {
            api.delete("/", itemKey)
            updateCallback()
        }
    }

    



    /* JSX */

    
    /* top section */
    /*             */
    const toggleBtn = <span onClick={() => toggleListener()}>
        <MaterialIcon name="keyboard_arrow_up" />
    </span>
    
    const infoHeader = <h3 onClick={() => toggleListener()}>{job.title} @ {job.company}</h3>
    
    const statusToggle = <StatusToggle
        statusNumber={job.status}
        itemKey={itemKey}
        updateCallback={updateCallback}
    />

    const topSection = <>
        { toggleBtn }
        { infoHeader }
        { statusToggle }
    </>




    /* data sections */
    /*               */
    const subheaderSection = <div className="subheader">
        <MaterialIcon name="location_on" extraClasses="blue" /> {job.location}
        <MaterialIcon name="hourglass_top" extraClasses="green" /> {job.timeModel}
    </div>

    const specsSection = <div className="specs">
        <div><MaterialIcon name="list_alt" extraClasses="purple" /> {job.contractTerm}</div>
        <div><MaterialIcon name="attach_money" extraClasses="green" /> {job.salary}</div>
    </div>

    const notesSection = <p>
        <MaterialIcon name="rate_review" extraClasses="blue" />
        {job.notes}
    </p>




    /* Rating section */
    /*                */

    const ratingHeader = <h3>Rating</h3>

    // displays the different rating criteria
    const ratingCategories = <>
        {
            Object.entries(job.rating).map(([rkey, rval], mapKey) => {
                return <div key={mapKey}>
                            <strong>{rkey}: </strong>
                            <RatingDisplay rating={rval} />
                            <span> ({rval})</span>
                </div>
            })
        }
    </>

    const ratingTotal = <div>
        <strong>Total: </strong> 
        {      
            <>
                <RatingDisplay rating={totalAvgRating} />
                <strong> ({totalAvgRating})</strong>
            </>
        }
    </div>

    const ratingSection = <div className="rating">
        { ratingHeader }
        { ratingCategories }
        { ratingTotal }
    </div>

    


    /* Buttons section */
    /*                 */
    const itemEditBtn = <button
                            className="item-edit-btn"
                            type="submit"
                            onClick={() => toggleEditMode()}
                                >
                            Edit Item
                        </button>

    const itemDeleteBtn = <button
                            className="item-delete-btn"
                            type="submit"
                            onClick={() => confirmDelete()}
                                >
                            Delete Item
                        </button>

    const buttonsSection = <>
        { itemEditBtn }
        { itemDeleteBtn }
    </>



    

    /* RENDER */

    return (
        <div className="job-item-detail-view">

            <div className="top-pane" >            
                { topSection }
            </div>

            <div className="main-pane">
                { subheaderSection }
                { specsSection }
                { notesSection }
                { ratingSection }
            </div>

            <div className="bottom-pane">
                { buttonsSection }
            </div>

        </div>
    )
}

export default JobItemDetailView;