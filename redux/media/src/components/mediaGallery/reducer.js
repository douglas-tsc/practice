import * as types from '../../constants/actionTypes'

const initialState = {
	images: [],
	videos: []
}

export const images = function(state = initialState.videos, action) {
	switch (action.type) {
		case types.SHUTTER_VIDEOS_SUCCESS:
			return [...state, action.videos]
		case types.SELECTED_VIDEO:
			return { ...state, selectedVideo: action.video }
		default:
			return state
	}
}

export const videos = function(state = initialState.videos, action) {
	switch (action.type) {
		case types.SHUTTER_VIDEOS_SUCCESS:
			return [...state, action.videos]
		case types.SELECTED_VIDEO:
			return { ...state, selectedVideo: action.video }
		default:
			return state
	}
}
