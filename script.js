// script.js

document.addEventListener("DOMContentLoaded", function () {
    const snowfallContainer = document.getElementById("snowfall");

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowfallContainer.appendChild(snowflake);

        const size = Math.random() * 3 + 2;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        const startPosition = Math.random() * window.innerWidth;
        snowflake.style.left = `${startPosition}px`;

        const animationDuration = Math.random() * 3 + 2;
        snowflake.style.animation = `fall ${animationDuration}s linear infinite`;

        setTimeout(() => {
            snowflake.remove();
        }, animationDuration * 1000);
    }

    function generateSnowflakes() {
        setInterval(createSnowflake, 50); // Decreased interval for more snowflakes
    }

    generateSnowflakes();
});
