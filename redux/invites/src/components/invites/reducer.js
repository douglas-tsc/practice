export function inviteReducer(state = {}, action) {
	switch (action.type) {
		case 'GET_INVITE_REQUESTED': {
			return {
				...state,
				inProgress: true,
				error: '',
				success: ''
			}
		}
		case 'GET_INVITE_REJECTED': {
			return {
				...state,
				inProgress: false,
				error: 'Error in getting invite.'
			}
		}
		case 'GET_INVITE_FULFILLED': {
			const { host, agenda, guests } = action.invite
			const newState = {
				...state,
				inProgress: false,
				success: 'Got invite.',
				host,
				agenda
			}
			newState.guests = []
			if (guests) {
				newState.guests = Object.keys(guests).map(k => guests[k])
			}
			return newState
		}
		case 'ADD_TO_INVITE_REQUESTED': {
			return {
				...state,
				inProgress: true,
				error: '',
				success: ''
			}
		}
		case 'ADD_TO_INVITE_REJECTED': {
			return {
				...state,
				inProgress: false,
				error: 'Error in adding guest.'
			}
		}
		case 'ADD_TO_INVITE_FULFILLED': {
			const newState = {
				...state,
				inProgress: false,
				success: 'Added guest.'
			}

			return newState
		}

		case 'GUEST_ADDED': {
			const newState = { ...state }
			newState.guests = newState.guests || []
			newState.guests = newState.guests.slice()
			newState.guests.push(action.guest)
			return newState
		}
		default:
			return state
	}
}
