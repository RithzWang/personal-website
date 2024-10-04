<script>
    function handleButtonClick(platform) {
        console.log("Clicked on " + platform + " button!");

        // Get the specific social icon that was clicked
        const clickedIcon = event.target;

        // Add the 'clicked' class to trigger the animation
        clickedIcon.classList.add('clicked');

        // Remove the 'clicked' class after the animation ends (0.3s)
        setTimeout(function() {
            clickedIcon.classList.remove('clicked');
        }, 300);
    }
</script>
