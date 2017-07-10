import * as firebase from '../../firebase'

export function DeleteBook() {
	const DELETE_BOOK = 'DELETE_BOOK'
	return {
		type: DELETE_BOOK
	}
}

export function AddBook() {
	const ADD_BOOK = 'ADD_BOOK'
	return {
		type: ADD_BOOK
	}
}

export function editBook(firebaseData) {
	const EDIT_BOOK = 'EDIT_BOOK'
	return {
		type: EDIT_BOOK,
		cover: firebaseData.Cover,
		title: firebaseData.Title,
		author: 'Mike Mangialardi',
		link: firebaseData.Link
	}
}

export function requestApi() {
	return dispatch => {
		const books = firebase.database().ref('/library/Books')
		books.on('value', snap => console.log(snap.val()))
	}
}
