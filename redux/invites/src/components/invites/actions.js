import { database } from '../../constants/firebase'

export function getInvite() {
  return dispatch => {
    dispatch(getInviteRequestedAction())
    return database
      .ref('/invites')
      .once('value', snap => {
        const invite = snap.val()
        dispatch(getInviteFulfilledAction(invite))
      })
      .catch(error => {
        console.log(error)
        dispatch(getInviteRejectedAction())
      })
  }
}

function getInviteRequestedAction() {
  return {
    type: 'GET_INVITE_REQUESTED'
  }
}

function getInviteRejectedAction() {
  return {
    type: 'GET_INVITE_REJECTED'
  }
}

function getInviteFulfilledAction(invite) {
  return {
    type: 'GET_INVITE_FULFILLED',
    invite
  }
}

export function addToInvite(name) {
  return dispatch => {
    dispatch(addToInviteRequestedAction())
    const guestsRef = database.ref('/invites/guests')
    guestsRef
      .push({
        name
      })
      .then(() => {
        dispatch(addToInviteFulfilledAction({ name }))
      })
      .catch(error => {
        dispatch(addToInviteRejectedAction())
      })
  }
}

function addToInviteRequestedAction() {
  return {
    type: 'ADD_TO_INVITE_REQUESTED'
  }
}

function addToInviteRejectedAction() {
  return {
    type: 'ADD_TO_INVITE_REJECTED'
  }
}

function addToInviteFulfilledAction(guest) {
  return {
    type: 'ADD_TO_INVITE_FULFILLED',
    guest
  }
}

export function watchGuestAddedEvent(dispatch) {
  database.ref('/invites/guests').on('child_added', snap => {
    dispatch(getGuestAddedAction(snap.val()))
  })
}

function getGuestAddedAction(guest) {
  return {
    type: 'GUEST_ADDED',
    guest
  }
}
