import React from 'react'

/**
 * A wrapper for Google's Material Icons with optional extra classes.
 * @param {string} name - The Material Icon's name.
 * @param {string} [extraClasses = ""] - A whitespace-separated list of extra classes.
 */
const MaterialIcon = ({ name, extraClasses="" }) => {
    let classListOut = "material-icons"
    if (extraClasses) classListOut += " " + extraClasses

    return <i className={classListOut}>{ name }</i>
}

export default MaterialIcon