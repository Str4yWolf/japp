import React from 'react'

/**
 * Controlled input item with label.
 * @param {string} label - A label to display.
 * @param {string} inKey - A key to use for data related aspects.
 * @param {string} value - What the user enters into the input field.
 * @param {function} handleChangeCb - Callback function to be invoked when value changes.
 */
const InputItem = ({ label, inKey, value, handleChangeCb }) => {
    
    return <>
        <label htmlFor={inKey}>{label}</label>
        <input 
            key={inKey}
            type="text"
            name={inKey}
            value={value}
            onChange={e => handleChangeCb(e)}
            />
    </>
}
export default InputItem