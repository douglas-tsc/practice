import { combineReducers } from 'redux'
import { images, videos } from './components/mediaGallery/reducer.js'

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
	images,
	videos
})

export default rootReducer
