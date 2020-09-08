import React from 'react'
import _ from 'lodash'
import MaterialIcon from "./MaterialIcon"



/**
 * Display a 5-level rating.
 * @param {number} rating - The rating expected to be within range [0, 10]
 * @param {string} [iconName = "star_rate"] - The name of the Material Icon to be used.
 */
const RatingDisplay = ({ rating, iconName="star_rate" }) => {
    
    // maps from input rating [0, 10] to [0, 5] interval
    const normalize = (n) => {
        return Math.round(n / 2)
    }

    // number of colored icons
    const coloredLen = normalize(rating)


    /* JSX */
    const ICON_COLORED = (key=0) => <MaterialIcon
        key={key}
        name={iconName}
        extraClasses="colored"
    />

    const ICON_UNCOLORED = (key=0) => <MaterialIcon
        key={key}    
        name={iconName}
        extraClasses="uncolored"
    />


    /* RENDER */
    return <div className="rating-display">
        {_.times(coloredLen, (key) => ICON_COLORED("i_c" + key))}
        {_.times(5 - coloredLen, (key) => ICON_UNCOLORED("i_uc" + key))}
    </div>
}

export default RatingDisplay