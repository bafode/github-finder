
import { SET_ALERT, REMOVE_ALERT } from '../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case SET_ALERT:
            return {
                alert:action.payload
            }
            
        case REMOVE_ALERT:
            return {
                alert:null
            }
        default:
            return state
    }
}