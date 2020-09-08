import rootRoute from './routes/root'
import statusRoute from './routes/status'



/*                                              */
/* Simulation of REST API on local storage      */
/* Delegates 'requests' to appropriate 'routes' */
/*                                              */

const get = (path) => {
    switch (path) {
        case '/':
            return rootRoute.getDatabase
        default:
    //  case '/:id'
    //  e.g., '/35' to get database entry at index 35
            return rootRoute.getDatabaseEntry(path)
    }
}


const post = (path, obj) => {
    switch (path) {
        case '/':
            return rootRoute.appendToDatabase(obj)
    }
}


const put = (path, idx, obj) => {
    switch (path) {
        case '/':
            return rootRoute.updateEntry(idx, obj)
        case '/status':
            return statusRoute.updateStatus(idx, obj)
    }
}


const del = (path, idx) => {
    switch (path) {
        case '/':
            return rootRoute.deleteFromDatabase(idx)
    }
}



const api = {
    get,
    post,
    put,
    delete: del
}

export default api