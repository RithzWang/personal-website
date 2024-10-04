document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', function () {
        this.classList.add('clicked'); // Add class on click
        setTimeout(() => {
            this.classList.remove('clicked'); // Remove class after 200ms
        }, 200);
    });
});
