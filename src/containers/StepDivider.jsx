import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import MaterialIcon from '../components/MaterialIcon'



/**
 * Extra component for visualizing steps given parameter configuration.
 * @param {number} [currentIndex=0] - The active index.
 * @param {number} [maxIndex=0] - The maximum value currentIndex can become.
 * @param {string} [iconName="stop_circle"] - The name of the Material Icon.
 * @param {string} [finishedIndexColor="green"] - The color highlight for finished indices.
 * @param {string} [activeIndexColor="blue"] - The color highlight for the current index.
 * @param {string} [inactiveIndexColor="gray"] - The color highlight for all other (unfinished) indices.
 */
const StepVisualizer = ({   currentIndex=0,
                            maxIndex=0,
                            iconName="stop_circle",
                            finishedIndexColor="green",
                            activeIndexColor="blue",
                            inactiveIndexColor="gray" }) => {

    const FINISHED_ICON = (key) => <MaterialIcon
                            key={"fi" + key}
                            name={iconName}
                            extraClasses={finishedIndexColor} />

    const ACTIVE_ICON = (key) => <MaterialIcon
                            key={"ai" + key}
                            name={iconName}
                            extraClasses={activeIndexColor} />

    const INACTIVE_ICON = (key) => <MaterialIcon
                            key={"ii" + key}
                            name={iconName}
                            extraClasses={inactiveIndexColor} />


    const output = <div className="step-visualizer">
        { _.times(currentIndex, (key) => FINISHED_ICON(key)) }
        { ACTIVE_ICON(0) }
        { _.times(maxIndex - currentIndex, (key) => INACTIVE_ICON(key)) }
    </div>

    return output
}



/**
 * Main component for paginating the given children.
 * @param {React.Children} children - The Children passed in from the containing element.
 * @param {number} [initialIndex = 0] - The index of the page to be shown on render.
 * @param {function} setIsFinalStep - A callback for notifying when final step (index) is reached.
 */
const StepDivider = ({ children, initialIndex=0, setIsFinalStep }) => {

    /* DATA / STATE */
    const [index, setIndex] = useState(initialIndex)
    const MAX_INDEX = React.Children.count(children) - 1

    // watch for reaching final step
    useEffect(() => {
        setIsFinalStep(index === MAX_INDEX)
    }, [index])
    


    /* JSX */

    let stepVisualizer = <StepVisualizer
                            currentIndex={index}
                            maxIndex={MAX_INDEX} />

    let mainContent = <>{ children[index] }</>


    let leftBtn = <button
                    onClick={() => setIndex(index - 1)}>
                    <MaterialIcon
                        name="keyboard_arrow_left"
                    />
    </button>

    let rightBtn = <button
                    onClick={() => setIndex(index + 1)}>
                    <MaterialIcon
                        name="keyboard_arrow_right"
                    />
    </button>

    let btns = <div className="step-divider-btns">
        { index > 0 && leftBtn }
        { index < MAX_INDEX && rightBtn }
    </div>
    

    /* RENDER */
    return <div className="step-divider">
        { stepVisualizer }
        { mainContent }
        { btns }
    </div>
}

export default StepDivider