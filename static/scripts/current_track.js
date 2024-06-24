let musicInfoContainer = document.getElementById('musicInfoContainer')
musicInfoContainer.style.display = 'none'

function updateMusicInfo(data) {
  if (!data || !data.data || !data.data.spotify || !data.data.spotify.song) {
    // Если информации о музыке нет или трек не воспроизводится
    musicInfoContainer.style.display = 'none'
    return
  }

  const spotifyInfo = data.data.spotify

  // Если трек воспроизводится
  if (spotifyInfo.song) {
    musicInfoContainer.style.display = 'block'
    // Обновляем информацию о треке на странице
    musicInfoContainer.innerHTML = `
							<div class="music-info">
									<img src="${spotifyInfo.album_art_url}" alt="Cover Image" class="cover-image">
									<div class="track-info">
											<div class="track-name">${spotifyInfo.song}</div>
											<div class="artist-name">${spotifyInfo.artist}</div>
									</div>
							</div>`
  } else {
    // Если трек не воспроизводится
    musicInfoContainer.style.display = 'none'
  }
}

// Запрашиваем информацию о музыке
fetch('https://api.lanyard.rest/v1/users/287577197336723456')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    return response.json()
  })
  .then((data) => {
    updateMusicInfo(data)
    // Обновляем информацию о музыке каждые 10 секунд
    setInterval(() => {
      fetch('https://api.lanyard.rest/v1/users/287577197336723456')
        .then((response) => response.json())
        .then((data) => updateMusicInfo(data))
        .catch((error) => console.error('Error:', error))
    }, 10000)
  })
  .catch((error) => console.error('Error:', error))
