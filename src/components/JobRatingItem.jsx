import React, { useState, useEffect } from 'react'
import { RATING_LINE_REGEX } from '../data/jobRatingConfig'



/**
 * A form to enter key-value pairs of 'category:rating'.
 * @param {object} previousRating - An object with key-value pairs for categories and their numeric ratings.
 * @param {function} sendData - A callback to send the data collected with this component.
 */
const JobRatingItem = ({ previousRating, sendData }) => {

    /* DATA */
    const [text, setText] = useState("")
    const HAS_PREVIOUS_RATING = Object.keys(previousRating).length > 0


    /* INITIALIZE */
    useEffect(() => {
        // load previous rating data object to textfield if given
        if (HAS_PREVIOUS_RATING) {
            let newText = ""
            Object.entries(previousRating).forEach(([key, val]) => {
                newText += key + ":" + val + "\n"
            })
            // remove last newline
            setText(newText.slice(0, newText.length - 1))
        }
    }, [])



    /* FUNCTIONS / HANDLERS */

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = () => {
        try {
            if (!isValidRating()) throw new Error("invalid rating")

            let ratingsArr = text.split("\n")
            let ratingsObj = {}

            // assemble rating object
            ratingsArr.forEach(rating => {
                let [key, val] = rating.split(":")
                ratingsObj[key] = parseInt(val)
            })

            sendData(ratingsObj)
            alert("Saved valid rating")

        } catch(err) {
            console.log(err)
            alert("Oops, something went wrong. " + err)
        }
    }

    // check if each rating line matches the configuration.
    const isValidRating = () => {
        let inputArr = text.split("\n")
        return inputArr.every(line => RATING_LINE_REGEX.test(line))
    }




    /* JSX */

    const textAreaLabel = <label htmlFor="job-rating-input">
        Add a rating
    </label>

    const textArea = <textarea
                        name="job-rating-input"
                        id="job-rating-input"
                        cols="30"
                        rows="10"
                        onChange={(e) => handleChange(e)}
                        value={text}
                        >
                    </textarea>

    const userInfo = <p>
        Please enter your rating items in the form <strong>'category:rating'</strong>, where <strong>category</strong> can be an alphabetic name for anything you want to rate, and <strong>rating</strong> is an integer from 0 to 10. Separate each item with a <strong>new line</strong>.
    </p>

    const submitBtn = <button
                        type="submit"
                        onClick={() => onSubmit()}
                        >
                            Save rating
                    </button>



    /* RENDER */
    
    return <div className="job-rating-item">
        { textAreaLabel }
        { textArea }
        { userInfo }
        { submitBtn }
    </div>
}

export default JobRatingItem