const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');
const toggleImageOption = document.getElementById('toggleImageOption');
const toggleImage = document.getElementById('toggleImage');

// Toggle the dropdown menu
dropdownButton.addEventListener('click', function() {
  if (dropdownContent.style.display === 'none') {
    dropdownContent.style.display = 'block';
  } else {
    dropdownContent.style.display = 'none';
  }
});

// Toggle the image visibility when an option is clicked
toggleImageOption.addEventListener('click', function() {
  if (toggleImage.style.display === 'none') {
    toggleImage.style.display = 'block';
    toggleImageOption.textContent = 'Hide Image';
  } else {
    toggleImage.style.display = 'none';
    toggleImageOption.textContent = 'Show Image';
  }
});
