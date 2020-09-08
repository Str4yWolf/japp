// reducer to get a sum
const reducerSum = (acc, val) => acc + val

/**
 * average the rating of all values of the object
 * @param {object} rating - A rating object with key-value pairs.
 * @param {number} [decimals=2] - Number of decimals after dot.
 */
export const getAverageRating = (rating, decimals=2) => {
    try {
        if (typeof rating !== "object") throw new Error("'rating' input parameter must be an object.")
        if (Object.keys(rating).length === 0) throw new Error ("'rating' input parameter must not be empty.")
        let ratingVals = Object.values(rating)

        let ratingSum = ratingVals.reduce(reducerSum)
        if (typeof ratingSum !== "number") throw new Error("Result of summing up rating values is not a number.")

        let ratingAvg = ratingSum / ratingVals.length

        if (!Number.isInteger(decimals) || Math.sign(decimals) < 0) {
            console.error("'decimals' input parameter was no positive integer. Used default value 2 instead.")
            return ratingAvg.toFixed(2)
        } else {
            return ratingAvg.toFixed(decimals)
        }
    } catch(err) {
        console.error(err)
        return "error"
    }
}