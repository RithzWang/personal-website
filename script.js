// Existing code for social icons
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', function () {
        this.classList.add('clicked'); 
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 200);
    });
});

// This function will fetch the current Spotify playback using the API
async function getSpotifyNowPlaying() {
    const token = 'fc168355f96349e19c80b3557df3e80c'; // Replace with your Spotify access token

    try {
        const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.status === 204 || response.status === 401 || response.status === 403) {
            // If no song is currently playing or token is expired/invalid
            document.getElementById('spotify-player').innerHTML = `<p>Nothing is playing at the moment.</p>`;
        } else {
            const data = await response.json();

            if (data && data.item) {
                const trackName = data.item.name;
                const artistName = data.item.artists[0].name;
                const albumArt = data.item.album.images[0].url;

                // Update the HTML inside the Spotify player section
                document.getElementById('spotify-player').innerHTML = `
                    <div class="spotify-track">
                        <img src="${albumArt}" alt="Album Art">
                        <div class="track-info">
                            <p><strong>${trackName}</strong></p>
                            <p>${artistName}</p>
                        </div>
                    </div>
                `;
            } else {
                document.getElementById('spotify-player').innerHTML = `<p><i class="fa-solid fa-waveform-lines"></i> Loading...</p>`;
            }
        }
    } catch (error) {
        console.error('Error fetching Spotify playback data:', error);
        document.getElementById('spotify-player').innerHTML = `<p>Error loading playback data.</p>`;
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', getSpotifyNowPlaying);





