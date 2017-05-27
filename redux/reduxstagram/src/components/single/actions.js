export function increment (index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

export function addComment (postId, author, comment) {
  type: 'ADD_COMMENT',
  postId,
  author,
  comment
}

export function removeComment (postId, author, comment) {
  type: 'REMOVE_COMMENT',
  postId,
  author,
  comment
}
