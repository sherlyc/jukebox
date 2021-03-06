import request from 'superagent'

export function getPlaylists (callback) {
  request
    .get('/api/v1/playlists')
    .end((err, res) => {
      callback(err, res.body)
    })
}

export function addPlaylist (newPlaylistName, callback) {
  request
    .post('/api/v1/playlists/add')
    .send({ playlistName: newPlaylistName })
    .end((err, res) => {
      callback()
    })
}

export function addSong (song, playlistId, callback) {
  request
    .post(`/api/v1/playlist/${playlistId}/add`)
    .send({ song })
    .end((err, res) => {
      callback(res)
    })
}
