// Existing code for social icons
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', function () {
        this.classList.add('clicked'); 
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 200);
    });
});

<script>
    function toggleDropdown() {
        var dropdown = document.getElementById("songDropdown");
        if (dropdown.style.display === "none") {
            dropdown.style.display = "block";
        } else {
            dropdown.style.display = "none";
        }
    }
</script>


