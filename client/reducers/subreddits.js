function subreddits (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_TRACKS':
      return [
        ...action.tracks
      ]

    default:
      return state
  }
}

export default subreddits
