import { combineReducers } from 'redux'
import homeReducers from './features/home/redux'
// import formReducers from './features/form/redux'
const rootReducers = combineReducers({
  home: homeReducers,
})
export default rootReducers
