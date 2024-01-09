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

// Add long press event for the "RithzWang" text
    const copyTextElement = document.getElementById("copyText");

    let longPressTimer;
    const longPressDuration = 1000; // Adjust the duration as needed (in milliseconds)

    copyTextElement.addEventListener("mousedown", function () {
        longPressTimer = setTimeout(function () {
            copyToClipboard("IG: r.ithwan");
        }, longPressDuration);
    });

    copyTextElement.addEventListener("mouseup", function () {
        clearTimeout(longPressTimer);
    });

    copyTextElement.addEventListener("mouseleave", function () {
        clearTimeout(longPressTimer);
    });

    function copyToClipboard(text) {
        const tempElement = document.createElement("textarea");
        tempElement.value = text;
        document.body.appendChild(tempElement);
        tempElement.select();
        document.execCommand("copy");
        document.body.removeChild(tempElement);
        console.log("Text copied to clipboard:", text);
    }
});

});
