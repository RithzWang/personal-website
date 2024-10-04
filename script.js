// Existing code for social icons
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', function () {
        this.classList.add('clicked'); 
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 200);
    });
});

// Discord status fetch code
const discordID = '837741275603009626';
const activityElement = document.getElementById('activity');

async function fetchDiscordStatus() {
    try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${discordID}`);
        const data = await response.json();

        if (data.success) {
            const activities = data.data.activities;
            const spotifyActivity = activities.find(activity => activity.type === 2); // type 2 is Spotify

            if (spotifyActivity) {
                const { details, state } = spotifyActivity;
                activityElement.innerHTML = `<i class="fa-solid fa-headphones"></i> Listening to: ${details} by ${state}`;
            } else {
                activityElement.textContent = "No current activity";
            }
        }
    } catch (error) {
        activityElement.textContent = "Error fetching status";
        console.error(error);
    }
}

fetchDiscordStatus();
