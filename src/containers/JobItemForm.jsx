import React, { useState, useEffect } from 'react'
import StepDivider from './StepDivider'
import InputItem from '../components/InputItem'
import JobRatingItem from '../components/JobRatingItem'
import { pascalToCamel } from '../utils/text.utils'
import { STEP_CONFIG, OBJ_VALUE_REGEX } from '../data/jobItemFormConfig.js'
import api from '../services/api/api'



/**
 * A form to enter details for creating a job item entry in the database.
 * @param {function} toggleFormCallback - A callback to request form toggle.
 * @param {object} [previousObject = {}] - An optional previous / preloadable object.
 * @param {number} [previousIndex = -1] - An optional previous index.
 */
const JobItemForm = ({ toggleFormCallback, previousObject = {}, previousIndex = -1 }) => {

    /* STATE */
    const [state, setState] = useState({})
    const [rating, setRating] = useState({})
    const [isFinalStep, setIsFinalStep] = useState(false)
    
    const hasPreviousObject = () => {
        return (typeof previousObject === 'object'
            && Object.keys(previousObject).length > 0)
    }



    // load a previous state if it exists
    useEffect(() => {
        if (hasPreviousObject()) {
            setState(previousObject)
            if (previousObject.rating) {
                setRating(previousObject.rating)
            }
        }
    }, [])


    /* FORM CHANGE HANDLER */
    const handleChange = (e) => {
        let current = { [e.target.name]: e.target.value }
        setState({...state, ...current})
    }


    /* SUBMIT HANDLER */
    const onSubmit = () => {
        try {
            if (!isValidInput(state)) throw new Error("Invalid input")

            // non user-defined data
            let now = Date.now()
            let meta = { createdAt: now, editedAt: now }

            let newData
            
            // EDIT EXISTING ENTRY
            if (hasPreviousObject()) {
                newData = { ...state, rating }
                api.put('/', previousIndex, newData)

            // CREATE NEW ENTRY
            } else {
                newData = { ...state, status: 0, rating, ...meta }
                api.post('/', newData)
            }

            toggleFormCallback()

        } catch(err) {
            alert(err)
            console.error(err)
        }
    }


    /**
     * Checks whether all values of an inputObj match the configuration.
     * @param {object} inputObj - The job data object.
     */
    const isValidInput = (inputObj) => {

        let flatProps = JSON.parse(JSON.stringify(inputObj))
        delete flatProps.rating

        return Object.values(flatProps).every(val => {
            return OBJ_VALUE_REGEX.test(val)
        })
    }

    


    /* JSX components */

    let header = <h3>{ hasPreviousObject() ? "Edit" : "Add" }  a job</h3>

    const ratingSection = <JobRatingItem previousRating={rating} sendData={setRating} />

    // PAGINATION -> INPUT FIELDS + RATING on last page
    const content = <StepDivider setIsFinalStep={setIsFinalStep}>

        { STEP_CONFIG.map((stepLabels, key) => {
            return <div key={"step-" + (key + 1)}>

                { stepLabels.map(label => {
                    let inKey = pascalToCamel(label)
                    return <InputItem
                                key={label}
                                label={label}
                                inKey={inKey}
                                value={state[inKey] || ""}
                                handleChangeCb={handleChange}
                                 />
                }) }

            { isFinalStep && ratingSection }

            </div> })
        }
    </StepDivider>



    const submitBtn = <button
        className="form-submit-btn"
        type="submit"
        onClick={() => onSubmit()}>
            Add
    </button>

    const cancelBtn = <button
        className="form-cancel-btn"
        type="submit"
        onClick={() => toggleFormCallback()}>
        Cancel
    </button>




    /* RENDER */
    
    return <div className="job-item-form">
        { header }
        { content }
        
        <div className="btns">
            { isFinalStep && submitBtn }
            { cancelBtn }

        </div>
    </div>
}

export default JobItemForm