import { combineReducers } from 'redux';
import user from './user'
import data from './data'
import  actionsFilter from './ActionsFilter'
const myReducer = combineReducers({
    user,
    data,
    actionsFilter
})
export default myReducer