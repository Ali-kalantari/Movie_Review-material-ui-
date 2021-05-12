import{combineReducers} from 'redux'
import islogged from './islogged';



const rootreducers = combineReducers({
    log : islogged
})

export default rootreducers;
