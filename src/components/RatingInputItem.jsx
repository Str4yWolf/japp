import React, { useState } from 'react'
import InputItem from './InputItem'
import MaterialIcon from './MaterialIcon'

/* DEPRACATED */
const RatingInputItem = ({ inKey, onSubmit, onDelete }) => {
    const [category, setCategory] = useState("")
    const [value, setValue] = useState(-1)

    const handleChange = (e) => {
        if (e.target.name === "category") {
            setCategory(e.target.value)
        } else {
            setValue(e.target.value)
        }
    }
    return <>
        <InputItem
            label="Category"
            inKey="category"
            value={category}
            handleChangeCb={handleChange} />
        <InputItem
            label="Value"
            inKey="value"
            value={value}
            handleChangeCb={handleChange} />
        <span onClick={() => onSubmit(
                                        inKey,
                                        { [category]: parseInt(value)} )
            }>
            <MaterialIcon name="add_circle" extraClasses="green" />
        </span>
        <span onClick={() => onDelete(inKey)}>
            <MaterialIcon name="cancel" extraClasses="red" />
        </span>
    </>
}
export default RatingInputItem