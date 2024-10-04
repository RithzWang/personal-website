document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', function () {
        this.classList.add('clicked'); // Add class on click
        setTimeout(() => {
            this.classList.remove('clicked'); // Remove class after 200ms
        }, 200);
    });
});

const toggleButton = document.getElementById('toggleButton');
const pictureContent = document.getElementById('pictureContent');

toggleButton.addEventListener('click', function() {
    if (pictureContent.classList.contains('hidden')) {
        pictureContent.classList.remove('hidden');
        pictureContent.classList.add('visible');
    } else {
        pictureContent.classList.remove('visible');
        pictureContent.classList.add('hidden');
    }
});

