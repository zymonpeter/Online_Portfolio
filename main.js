document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted!'); 
  });


  document.addEventListener('DOMContentLoaded', function () {
    // Get all gallery images
    const galleryImages = document.querySelectorAll('.gallery-image');
  
    // Get modal and modal content
    const modal = document.createElement('div');
    modal.className = 'modal';
    const modalContent = document.createElement('img');
    modalContent.className = 'modal-content';
    modal.appendChild(modalContent);
  
    // Get close button
    const closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.innerHTML = '&times;';
    modal.appendChild(closeButton);
  
    // Append modal to body
    document.body.appendChild(modal);
  
    // Add click event listeners to each gallery image
    galleryImages.forEach(function (image) {
      image.addEventListener('click', function () {
        // Set the modal content source to the clicked image source
        modalContent.src = this.src;
  
        // Display the modal
        modal.style.display = 'block';
      });
    });
  
    // Add click event listener to close button
    closeButton.addEventListener('click', function () {
      // Hide the modal
      modal.style.display = 'none';
    });
  
    // Add click event listener to close the modal when clicking outside the image
    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        // Hide the modal
        modal.style.display = 'none';
      }
    });
  });


  
  