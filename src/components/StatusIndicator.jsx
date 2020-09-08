import React from 'react';
import MaterialIcon from "./MaterialIcon"
import { STATUS_TEXT_DEFAULTS } from '../data/jobStatusConfig'


/**
 * Display a job status with an icon.
 * @param {number} statusNumber - The number (key) of the job status.
 * @param {string} [statusText = ""] - An optional job status text.
 * @param {function} toggleCallback - A callback to notify about a toggle action.
 */
const StatusIndicator = ({ statusNumber, statusText="", toggleCallback }) => {
    
    const STATUS_NUMBER_TO_ICON = {
        0: <MaterialIcon name="stop_circle" extraClasses="purple" />,
        1: <MaterialIcon name="forward_to_inbox" extraClasses="orange" />,
        2: <MaterialIcon name="call" extraClasses="orange" />,
        3: <MaterialIcon name="code" extraClasses="orange" />,
        4: <MaterialIcon name="check_circle" extraClasses="orange" />,
        5: <MaterialIcon name="check_circle" extraClasses="green" />,
        6: <MaterialIcon name="cancel" extraClasses="red" />,
        7: <MaterialIcon name="pan_tool" extraClasses="red" />,
        8: <MaterialIcon name="check_circle" extraClasses="red" />,
        9: <MaterialIcon name="pending" extraClasses="orange" />
    }

    // use default statusText if needed
    let outStatusText = statusText ? statusText : STATUS_TEXT_DEFAULTS[statusNumber]

    /* RENDER */
    return <span
                className="status-indicator"
                onClick={toggleCallback}
                >
                    { STATUS_NUMBER_TO_ICON[statusNumber] }
                    <h4>{outStatusText}</h4>
            </span>
}

export default StatusIndicator;