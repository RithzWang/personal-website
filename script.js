const toggleButton = document.getElementById('toggleButton');
const toggleImage = document.getElementById('toggleImage');

toggleButton.addEventListener('click', function() {
  if (toggleImage.style.display === 'none') {
    toggleImage.style.display = 'block';
    toggleButton.textContent = 'Hide Image';
  } else {
    toggleImage.style.display = 'none';
    toggleButton.textContent = 'Show Image';
  }
});
